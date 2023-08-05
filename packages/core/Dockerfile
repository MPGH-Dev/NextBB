FROM node:16-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache python3 py3-pip make g++
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]