# stage 1
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM node:18 AS final
WORKDIR /app
COPY --from=builder ./app/.output ./.output
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "serve"]
