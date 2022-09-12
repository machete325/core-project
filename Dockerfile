FROM node:14.19-alpine as build-stage
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
# install dependencies
COPY package.json package-lock.json ./
RUN npm install
COPY . ./

# build project
RUN npm run build


FROM nginx:latest as serving-stage
COPY --from=build-stage /app/build /usr/share/nginx/html