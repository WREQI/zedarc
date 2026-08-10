# 生产部署、备份与监控

## 部署

本地 Compose 默认仍使用 `http://127.0.0.1:18080` 和 `http://127.0.0.1:3000`，验证码为 mock provider。生产使用 HTTPS overlay，不要把 PostgreSQL/Redis/API 端口暴露到公网：

```bash
export SERVER_NAME=market.example.com
export TLS_CERT_DIR=/etc/letsencrypt/live/market.example.com
export POSTGRES_PASSWORD='use-a-long-random-password'
export JWT_SECRET='use-at-least-32-random-characters'
export SMS_PROVIDER=http
export SMS_PROVIDER_URL=https://sms-provider.example/v1/send
export SMS_PROVIDER_API_KEY='provided-out-of-band'
export SMS_TEMPLATE_ID=login-code
docker compose -f docker-compose.yml -f docker-compose.production.yml up -d --build
```

DNS 应将域名指向服务器，证书目录只读挂载到 web 容器。`web/nginx.prod.conf` 将 HTTP 重定向到 HTTPS，并透传 `X-Forwarded-*` 和 WebSocket。证书续期后执行 `docker compose restart web`。

## 认证安全配置

- `POST /api/auth/code` 通过 `SmsProvider` 发送验证码；`SMS_PROVIDER=http` 使用真实 HTTP provider，mock 仅用于非生产环境。
- 验证码只保存 SHA-256 摘要，默认 5 分钟过期、5 次校验失败后失效、同一手机号 60 秒内不能重复发送。可用 `SMS_CODE_TTL_SECONDS`、`SMS_SEND_INTERVAL_SECONDS`、`SMS_MAX_ATTEMPTS` 调整。
- 生产启动会拒绝短 `JWT_SECRET` 或 mock SMS provider。
- Access token 默认 15 分钟；Refresh token 是 48 字节随机 opaque token，只保存 SHA-256 摘要，默认 30 天。刷新时旧 token 在数据库中先删除，实行一次性轮换；登出会撤销当前 token。生产应通过 HTTPS 传输，客户端不要将 refresh token 写入 URL 或日志。
- HTTP provider 的具体短信模板和凭据由环境变量注入，API key 不写入仓库。

## PostgreSQL 备份与恢复

每日执行并将 `backups/postgres` 同步到独立、加密的对象存储（脚本输出为 custom format）：

```bash
./scripts/postgres-backup.sh
./scripts/postgres-restore.sh backups/postgres/zedarc-20260811T000000Z.dump
```

恢复前应暂停 API/worker、确认备份文件来源，并在预生产环境演练。恢复后运行 `migration-init`，再启动应用。建议保留至少 7 天每日备份、4 周每周备份，并定期验证 `pg_restore --list`。

## Redis 持久化

Compose 已启用 AOF、`appendfsync everysec` 和 RDB 快照（Redis 数据主要是缓存/临时状态）。`redis-data` 必须位于持久磁盘；灾备环境可定期复制 `/data/appendonlydir` 与 `dump.rdb`，但不要将 Redis 当作 PostgreSQL 的业务数据备份。

## 指标与告警

Prometheus 文本端点：API `/api/metrics`、worker 容器内 `/metrics`、web `/metrics`。当前指标是存活/uptime 基线；健康探针分别使用 API `/api/health`、`/api/health/live`、worker `/health`、web `/health`。

建议每 30 秒抓取 API 和 web，并从同网络抓取 worker。最低告警规则：

- 任一健康检查连续 2 分钟失败：`critical`，检查容器、依赖和最近部署。
- API `zedarc_api_up` 不存在或 `up == 0`：`critical`。
- API 5xx 比例 > 5% 持续 5 分钟：`warning`。
- PostgreSQL 磁盘使用 > 80% 或备份超过 26 小时未成功：`warning/critical`。
- Redis AOF 文件系统剩余空间 < 20%：`warning`。

日志输出到 stdout/stderr，使用 `docker compose logs --since=10m api web market-worker` 收集；指标端点不应直接暴露到公网。
