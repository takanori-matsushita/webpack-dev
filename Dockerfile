FROM node:13.8.0
#LABEL title=""
#LABEL description=""
#LABEL version=""
#LABEL maintainer=""
WORKDIR /markup
RUN npm init -y && \
  npm install -D webpack webpack-cli babel-loader @babel/core @babel/preset-env \
  node-sass sass-loader css-loader postcss-loader css-mqpacker css-declaration-sorter && \
  npm install  mini-css-extract-plugin