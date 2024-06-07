# Backend Dockerfile
FROM node:18.14.2 AS build

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

FROM node:18.14.2 AS run

WORKDIR /app

COPY --from=build /app .

CMD ["npm", "start"]
