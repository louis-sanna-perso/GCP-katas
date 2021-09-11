FROM node:14-alpine
WORKDIR /front


COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Define your port
EXPOSE 3000

# Tell Docker how to run your app
CMD yarn run start
