FROM mcr.microsoft.com/playwright:v1.49.1-jammy

WORKDIR /playwright-js-ci

COPY package*.json ./

RUN npm install

COPY . .
