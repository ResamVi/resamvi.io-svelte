FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.23-alpine
COPY --from=build /app /usr/share/nginx/html
COPY . .

