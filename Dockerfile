# Stage 1: Build the React app
FROM node:14 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React app
FROM node:14
WORKDIR /app
COPY --from=builder /app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build"]