# Use the official Node.js image as the base
FROM node:16
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install farmer dependencies
RUN npm install --legacy-peer-deps
# Copy the entire farmer codebase to the container
COPY . .
# Expose the farmer service port
EXPOSE 5174
# Command to start the React development server
CMD ["npm", "start"]
