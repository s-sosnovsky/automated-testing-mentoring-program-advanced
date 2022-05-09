FROM node

RUN apt-get update
RUN apt-get install -y curl

COPY ./wait-for-grid.sh /usr/bin/wait-for-grid.sh
ADD . /app

WORKDIR /app

RUN npm cache verify
RUN npm i

ENTRYPOINT ["sh","/usr/bin/wait-for-grid.sh"]
