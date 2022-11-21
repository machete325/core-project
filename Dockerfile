FROM node:14.19-alpine as build-stage
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
# install dependencies
COPY package.json ./
RUN npm ci
COPY . ./

# build project
RUN npm run build


FROM nginx:latest as serving-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]