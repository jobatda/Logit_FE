FROM nginx:latest

RUN apt-get -y update && \
	apt-get -y upgrade && \
	apt-get -y install openssl dumb-init

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT [ "dumb-init" ]