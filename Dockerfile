# react 의존성 설치 및 빌드
FROM node:20-alpine AS build
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

# 빌드 된 앱을 가져와 nginx 이미지로 컨테이너 구축
FROM nginx:latest

RUN apt-get -y update && \
	apt-get -y upgrade && \
	apt-get -y install openssl dumb-init

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT [ "dumb-init" ]