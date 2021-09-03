#! /bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc

nvm install --lts
npm install -g yarn

mkdir git
cd git
git clone https://github.com/louis-sanna-perso/GCP-katas.git
cd GCP-katas/
cd front
yarn install
yarn build

cd ../backend
yarn install
yarn build

nom install -g pm2
pm2 start build/app.js