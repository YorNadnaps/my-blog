FROM node

WORKDIR /app
COPY package.json /app/client/
RUN cd client && npm install
COPY src/. /app/client/src/
COPY public/. /app/client/public/
RUN cd client && npm run build

COPY server/package.json /app/server/
RUN cd server && npm install
COPY server/server.js /app/server/

EXPOSE 9090
CMD ["npm", "run", "start"];