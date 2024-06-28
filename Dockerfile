# Use an official node image as a parent image.
FROM node:16-alpine

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY package.json package-lock.json ./
RUN npm install

# Copy the project files.
COPY . .

# Build the React app
RUN npm run build

# Install 'serve' to serve the build files
RUN npm install -g serve

# Expose the port the app runs on.
EXPOSE 3007

# Command to run the app
CMD ["serve", "-s", "build"]


# # Stage 1: Build the React app
# FROM node:14 AS builder
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the React app
# FROM node:14
# WORKDIR /app
# COPY --from=builder /app/build ./build
# RUN npm install -g serve
# CMD ["serve", "-s", "build"]