FROM node

RUN apt-get update
RUN apt-get install -y curl
RUN apk add --no-cache bash

COPY ./wait-for-grid.sh /usr/bin/wait-for-grid.sh
ADD . /app

WORKDIR /app

RUN npm cache verify
RUN npm i

ENTRYPOINT ["wait-for-grid.sh"]
