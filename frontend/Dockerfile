# Frontend Dockerfile
FROM node:16.14.2 AS build

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

FROM node:16.14.2 AS run

WORKDIR /app

COPY --from=build /app .

CMD ["npm", "start"]
