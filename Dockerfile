FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV DB_NAME=test_task
ENV DB_USERSNAME=root
ENV DB_PASSWORD=root
ENV DB_HOST=node_db
ENV REDIS_HOST=redis
CMD ["npm", "run", "test"]
CMD [ "npm", "run", "dev" ]
RUN #ts-node index.ts
