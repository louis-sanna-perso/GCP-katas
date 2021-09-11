FROM node:14-alpine AS front-build
WORKDIR /front

COPY ./front/package.json ./front/yarn.lock ./
RUN yarn install

COPY ./front .

RUN yarn run build

FROM node:14-alpine AS server-build
WORKDIR /backend

COPY --from=front-build /front/build ../front/build

COPY ./backend/package.json ./backend/yarn.lock ./
RUN yarn install

COPY ./backend .

RUN yarn run build

EXPOSE 3001

CMD ["node", "./build/app.js"]