FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080
# in terminal use docker run -p 5000:8080 to run locally

CMD [ "npm", "start" ]