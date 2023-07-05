FROM node as build
WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine
COPY --from=build /app/build /usr/share/nginx/html
