# Zedarc

Zedarc 是行情、资讯与投资工作台。服务端由 NestJS API、行情 worker、PostgreSQL 和 Redis 组成，Web 通过 API/WebSocket 消费数据。

## 快速开始

```bash
docker compose up -d postgres redis
cd server/api && npm ci && npm run db:migrate && npm run dev
# 新终端
cd server/worker && npm ci && npm run dev
```

本地默认 API 为 `http://127.0.0.1:3000`，Swagger 为 `/docs`。本地短信登录使用 mock provider；这不代表已经接入真实短信。

## 生产化入口

生产部署必须使用：

```bash
node scripts/check-production-config.mjs
# 预览合并后的 compose 配置
docker compose -f docker-compose.yml -f docker-compose.production.yml config
docker compose -f docker-compose.yml -f docker-compose.production.yml up -d --build
```

环境变量模板在 [`scripts/production-env.example`](scripts/production-env.example)，真实值应由部署平台 Secret 注入，不能提交到 Git。生产 overlay 会：

- 强制外部注入 PostgreSQL、Redis、JWT、CORS 和短信配置；数据库/Redis 不发布宿主机端口。
- 为 Redis 开启密码与 AOF，并限制容器日志轮转；PostgreSQL 使用持久卷。
- 通过 Nginx 挂载 TLS 证书。证书续期、HSTS、TLS 版本和安全头策略需要在反向代理层执行，详见 [`SERVER_DEVELOPMENT.md`](SERVER_DEVELOPMENT.md)。

### 可观测性

API 和 worker 输出 JSON 结构化日志到 stdout/stderr，包含服务名、事件、时间戳和请求/错误上下文；API 使用 `x-request-id` 做请求关联，5xx 会输出 `exception` 事件。`ERROR_TRACKING_DSN` 仅作为后续接入 Sentry/OTel 等错误平台的配置位，当前不会宣称已接入外部错误追踪服务。

健康与指标：

- API：`/api/health/live`、`/api/health`、`/api/metrics`
- worker：容器内 `:9090/health`、`:9090/metrics`
- worker 将 TDX、stock-sdk fallback、最近成功时间、失败计数和 stale 状态写入 Redis `market:provider:status`。

数据源只按真实返回值缓存；TDX 失败会尝试 stock-sdk，均不可用时保留 unavailable 状态，不伪造行情。系统不包含真实券商交易接入。

## 短信登录评估

当前代码提供 `mock` 和通用 HTTP provider 两种模式。HTTP provider 只是一个待适配供应商契约（JSON `phone/code/templateId` + Bearer key），并未完成任一真实短信厂商的签名、模板审核、地域合规、回执、重试/幂等和密钥托管验证。因此：

1. 上线前需选择并评估供应商，确认大陆短信资质、模板审核、数据处理协议、SLA、回执与费用。
2. 为供应商实现并集成专用 adapter，在沙箱验证限流、超时、重复发送、错误码和回执。
3. 将 API key 放入 Secret Manager，执行真实手机号灰度验证和审计；生产禁止 `SMS_PROVIDER=mock`。

## CI

`.github/workflows/ci.yml` 会分别执行 API build/test、worker build/test、Web build、生产配置模板检查和 Compose 配置渲染。CI/CD 不会自动获得真实短信、数据库、Redis 或券商凭据。
