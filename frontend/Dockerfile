FROM node:8.6.0

WORKDIR /tmp

COPY package.json /tmp/
COPY package-lock.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install --loglevel=warn --ignore-scripts

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

EXPOSE 5002
CMD [ "npm", "start" ]
# CMD [ "npm", "run", "build.prod" ]