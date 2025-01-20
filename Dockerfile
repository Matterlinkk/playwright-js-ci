FROM mcr.microsoft.com/playwright:v1.49.1-jammy

WORKDIR /playwright-js-ci

COPY package*.json /playwright-js-ci/
RUN npm install
RUN npx playwright install

COPY . /playwright-js-ci