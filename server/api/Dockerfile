FROM node:22-alpine AS build
WORKDIR /app/server/api
COPY server/api/package*.json ./
COPY packages/shared /app/packages/shared
RUN npm install
COPY server/api/tsconfig.json ./
COPY server/api/src ./src
COPY server/api/scripts ./scripts
COPY server/api/drizzle ./drizzle
RUN npm run build

FROM node:22-alpine
WORKDIR /app/server/api
ENV NODE_ENV=production
COPY --from=build /app/server/api/package*.json ./
COPY --from=build /app/packages/shared /app/packages/shared
RUN npm install --omit=dev
COPY --from=build /app/server/api/dist ./dist
COPY --from=build /app/server/api/scripts ./scripts
COPY --from=build /app/server/api/drizzle ./drizzle
EXPOSE 3000
CMD ["node", "dist/main.js"]
