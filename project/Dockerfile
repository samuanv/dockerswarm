
#node extra ligero oficial
FROM node:carbon-alpine
WORKDIR /nestjs
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 8080
#CMD [ "/bin/sh" ]
ENTRYPOINT ["npm", "run", "start"]
