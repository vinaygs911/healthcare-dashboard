# Use Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port 5000 for backend API
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
