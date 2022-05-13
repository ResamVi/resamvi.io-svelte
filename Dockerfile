FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:18-alpine
COPY --from=build /app .
COPY . .

EXPOSE 3000
CMD ["node", "./build"]