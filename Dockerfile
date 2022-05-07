FROM node

RUN apt-get update
# RUN apt-get install -y curl
# COPY ./entrypoint.sh /usr/bin/entrypoint.sh
ADD . /app
WORKDIR /app
RUN npm cache verify
RUN npm i
# ENTRYPOINT [ "entrypoint.sh" ]
