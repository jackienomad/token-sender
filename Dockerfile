# FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:16.14.2-alpine
FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:20.9.0-alpine
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.7.0 /lambda-adapter /opt/extensions/lambda-adapter
EXPOSE 8080

ARG HOSTNAME
ARG WALLET_PRIVATE_KEY

ENV HOSTNAME=$HOSTNAME
ENV WALLET_PRIVATE_KEY=$WALLET_PRIVATE_KEY
ENV PORT=8080

WORKDIR "/var/task"
ADD package.json /var/task/package.json
ADD yarn.lock /var/task/yarn.lock
COPY . /var/task
# RUN npm install --omit=dev
RUN apk --no-cache add curl python3 make g++
RUN yarn install --frozen-lockfile
RUN yarn build 
ADD . /var/task
# CMD ["node", "index.js"]
CMD ["node", "dist/main.js"]
# CMD [ "yarn", "start:prod" ]
