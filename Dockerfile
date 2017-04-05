FROM node:boron
ADD . /code
WORKDIR /code
RUN npm config set cache /code/.npm-cache --global
