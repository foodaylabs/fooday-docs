FROM node:18 AS builder
WORKDIR /app
ADD . /app
RUN yarn --frozen-lockfile
RUN mkdir -p build
RUN yarn build --config docusaurus.docs.config.js --out-dir build/docs
RUN yarn build --config docusaurus.blog.config.js --out-dir build/blog
RUN touch build/health

FROM nginx:1.25 AS runner
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
