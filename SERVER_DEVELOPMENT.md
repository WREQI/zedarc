# Zedarc 服务端开发与部署

## 本地启动

先启动基础设施：

```bash
docker compose up -d postgres redis
```

启动 API：

```bash
cd server/api
npm install
npm run db:migrate
npm run dev
```

启动行情 Worker：

```bash
cd server/worker
npm install
npm run dev
```

前端仍然使用 Vite HMR：

```bash
cd web
npm run dev
```

本地 API 文档：`http://127.0.0.1:3000/docs`

## Docker 全量启动

```bash
docker compose up -d --build
```

访问：

- Web：`http://127.0.0.1:18080`
- API：`http://127.0.0.1:3000`
- Swagger：`http://127.0.0.1:3000/docs`

生产部署请使用 `docker-compose.production.yml` overlay。先将 [`scripts/production-env.example`](scripts/production-env.example) 中的变量交给 Secret Manager/部署平台注入，再执行 `node scripts/check-production-config.mjs`；不要把真实值写入仓库。当前项目没有真实券商接入，也不能将通用 HTTP 短信适配器视为已完成真实短信接入，评估清单见本文“真实短信登录评估”。

查看日志：

```bash
docker compose logs -f api
docker compose logs -f market-worker
```

## 生产配置检查与环境模板

```bash
node scripts/check-production-config.mjs --template
node scripts/check-production-config.mjs
```

`check-production-config.mjs` 在 `NODE_ENV=production` 下拒绝 mock 短信、短密钥、非 HTTPS CORS、缺失数据库/Redis URL 或缺失短信配置。模板只包含占位符；真实密钥必须由 Secret Manager 注入。`DATABASE_URL` 和 `REDIS_URL` 应使用带认证信息的内网地址，密码包含特殊字符时请按 URL 规则编码。

## 环境变量

复制 `.env.example` 为 `.env`，生产环境务必修改：

- `POSTGRES_PASSWORD`
- `JWT_SECRET`
- `SMS_PROVIDER`（本地默认 `mock`，生产必须为 `http`）
- `MOCK_LOGIN_CODE`（仅非生产环境）
- `SMS_PROVIDER_URL` / `SMS_PROVIDER_API_KEY` / `SMS_TEMPLATE_ID`（真实短信 provider）
- `SMS_CODE_TTL_SECONDS` / `SMS_SEND_INTERVAL_SECONDS` / `SMS_MAX_ATTEMPTS`
- `REFRESH_TOKEN_TTL_SECONDS` / `ACCESS_TOKEN_TTL_SECONDS`
- `MARKET_CODES`
- `MARKET_INTERVAL_MS`

Redis 和 PostgreSQL 只通过 Docker 内网访问，不要把 `6379` 或 `5432` 暴露到公网。生产 Redis 使用密码、AOF 和容器日志轮转；PostgreSQL 使用持久卷、密码认证和迁移 init job。上线前执行：

```bash
docker compose -f docker-compose.yml -f docker-compose.production.yml config
docker compose -f docker-compose.yml -f docker-compose.production.yml up -d --build
```

## 数据和 fallback 策略

- PostgreSQL：用户、认证刷新令牌、自选股、收藏等持久数据
- Redis：实时行情、K 线缓存、Pub/Sub 和临时状态
- TDX：首选行情源
- stock-sdk：TDX 失败时的行情源
- mock：开发或数据源不可用时的最终 fallback

## 健康检查、迁移和基础监控

`docker compose up --build` 的启动顺序为 PostgreSQL/Redis 就绪 → `migration-init` 成功 → API/worker 就绪 → web 就绪。除一次性 `migration-init` 外，服务均使用 `restart: unless-stopped`。迁移脚本按 `server/api/drizzle/*.sql` 文件名顺序执行，并在 `__zedarc_migrations` 表中记录，重复启动不会重复执行。

健康端点：

- API：`GET /api/health/live`（进程存活）、`GET /api/health`（含 PostgreSQL readiness）
- worker：容器内 `GET http://127.0.0.1:9090/health`（含 Redis readiness）
- web：`GET /health`

基础 Prometheus 文本指标：API `GET /api/metrics`、worker `GET http://127.0.0.1:9090/metrics`、web `GET /metrics`。worker 指标包含采集次数、失败次数、最近 provider 成功时间、stale 状态及各 provider 失败计数；Redis 中的 `market:provider:status` 还包含当前 provider、fallback 和最近错误。建议对 worker `/health` 503、`zedarc_worker_provider_stale=1`、连续 provider 失败和 API readiness 503 告警。

API/worker 输出 JSON 日志到 stdout/stderr，API 为请求返回 `x-request-id`，异常日志包含 request ID、路径、状态和 stack（敏感字段会脱敏）。`ERROR_TRACKING_DSN` 目前只是外部错误平台接入预留配置，不表示已接入真实错误追踪服务。备份、Redis AOF 和告警阈值见 [`docs/production.md`](docs/production.md)。

### HTTPS 与安全头

TLS 终止在 Web/Nginx 层：生产 overlay 要求 `TLS_CERT_DIR/fullchain.pem` 和 `privkey.pem`，外部负载均衡器或 Nginx 负责证书续期。只允许 HTTPS 公开访问，HTTP 仅用于 301 跳转；生产 CORS 必须是明确的 HTTPS origin。API 已启用 Helmet（至少 `X-Content-Type-Options: nosniff`、`X-Frame-Options` 等），但 HSTS 应只在证书稳定、确认所有子域名均支持 HTTPS 后开启。不要把 Swagger 暴露给公网，或在边缘层增加访问控制。

### 真实短信登录评估

当前 `SMS_PROVIDER=http` 是通用 POST adapter，不是任何真实短信厂商的已验证集成；项目不能宣称已接入真实短信。上线前必须完成供应商选择、资质与模板审核、签名/错误码/回执 adapter、超时和幂等重试、手机号脱敏、Secret Manager、限流/风控、沙箱和真实手机号灰度。`SMS_PROVIDER=mock` 只能用于非生产环境。

## 验证

```bash
cd server/api && npm run build && npm run test:smoke
cd ../worker && npm run build && npm run test:smoke
cd ../../web && npm run build
docker compose config
```
