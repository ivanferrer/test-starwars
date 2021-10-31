ARG ImgNode=node:14.17.1
ARG ImgNginx=nginx:1.21
FROM ${ImgNode} as angular
WORKDIR /app
COPY package.json .

ARG PORT=25000
ARG STAGE=dev
ARG URL_API=https://swapi.dev/api/

ENV URL_API=${URL_API}
ENV STAGE=${STAGE}
ENV PORT=${PORT}

RUN npm i npm@latest -g
RUN npm install --silent

COPY . .
RUN npm run build:${STAGE}

FROM ${ImgNginx}
VOLUME /var/cache/nginx
COPY --from=angular /app/dist/ros /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE ${PORT}