FROM node:22-alpine AS build
WORKDIR /app/server/worker
COPY server/worker/package*.json ./
COPY packages/shared /app/packages/shared
RUN npm install
COPY server/worker/tsconfig.json ./
COPY server/worker/src ./src
RUN npm run build

FROM node:22-alpine
WORKDIR /app/server/worker
ENV NODE_ENV=production
COPY --from=build /app/server/worker/package*.json ./
COPY --from=build /app/packages/shared /app/packages/shared
RUN npm install --omit=dev
COPY --from=build /app/server/worker/dist ./dist
EXPOSE 9090
CMD ["node", "dist/main.js"]
