FROM node

RUN apt-get update
RUN apt-get install -y curl
# COPY ./entrypoint.sh /usr/bin/entrypoint.sh
# RUN ["chmod", "+x", "/usr/bin/entrypoint.sh"]
ADD . /app
WORKDIR /app
RUN npm i
# ENTRYPOINT [ "/usr/bin/entrypoint.sh" ]
