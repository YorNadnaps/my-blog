FROM node

WORKDIR /app
COPY package.json /app/
RUN npm install
COPY src/. /app/src/
COPY public/. /app/public/
RUN npm run build

COPY server/package.json /app/server/
RUN cd server && npm install
COPY server/server.js /app/server/
WORKDIR /app/server

EXPOSE 9090
CMD ["npm", "start"];