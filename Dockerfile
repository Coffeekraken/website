FROM node:10.15.0-jessie
ADD . /code
WORKDIR /code
RUN npm config set cache /code/.npm-cache --global
