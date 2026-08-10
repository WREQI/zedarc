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

- Web：`http://127.0.0.1:8080`
- API：`http://127.0.0.1:3000`
- Swagger：`http://127.0.0.1:3000/docs`

查看日志：

```bash
docker compose logs -f api
docker compose logs -f market-worker
```

## 环境变量

复制 `.env.example` 为 `.env`，生产环境务必修改：

- `POSTGRES_PASSWORD`
- `JWT_SECRET`
- `MOCK_LOGIN_CODE`
- `MARKET_CODES`
- `MARKET_INTERVAL_MS`

Redis 和 PostgreSQL 只通过 Docker 内网访问，不要把 `6379` 或 `5432` 暴露到公网。

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

基础 Prometheus 文本指标：API `GET /api/metrics`、worker `GET http://127.0.0.1:9090/metrics`、web `GET /metrics`。服务日志直接输出到 stdout/stderr，可用 `docker compose logs -f api market-worker` 查看。

## 验证

```bash
cd server/api && npm run build && npm run test:smoke
cd ../worker && npm run build && npm run test:smoke
cd ../../web && npm run build
docker compose config
```
