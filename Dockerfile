FROM node:16.18.1-alpine3.16 as build-stage
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
# install dependencies
COPY package.json ./
RUN npm install 
RUN npm ci
COPY . ./

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

# build project
RUN npm run build


FROM nginx:latest as serving-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]