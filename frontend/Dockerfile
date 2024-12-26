# Use the official Node.js image as the base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the entire frontend codebase to the container
COPY . .

# Expose the frontend service port
EXPOSE 5173

# Command to start the React development server
CMD ["npm", "start"]
