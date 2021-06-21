FROM node:lts AS BUILD_IMAGE

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY . /app

EXPOSE 3000

# install package from package-lock
RUN npm ci

# build
RUN npm run build

# remove development dependencies
RUN npm prune --production

# run node prune
RUN /usr/local/bin/node-prune

FROM node:lts-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/package.json ./package.json

CMD ["npm","start"]
