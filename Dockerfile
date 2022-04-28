FROM node

RUN apt-get update
RUN apt-get install -y curl
ADD . /app
WORKDIR /app
RUN npm i
RUN ["chmod", "+x", "entrypoint.sh"]
ENTRYPOINT [ "entrypoint.sh" ]
