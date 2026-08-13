FROM node:22-alpine AS build
WORKDIR /app
COPY web/package*.json ./web/
COPY packages/shared /app/packages/shared
WORKDIR /app/web
RUN npm install
COPY web/. .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
