FROM node:10.19.0-stretch-slim

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8040

CMD ["npm","run", "dev"]