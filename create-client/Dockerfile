# We use a Node.js base image.
FROM node:18

# We set the working directory inside the container.
WORKDIR /usr/src/app

# We copy the application files.
COPY package*.json ./

# Install ALL dependencies, including dev (optional)
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the port
EXPOSE 3001

# Run the microservice
CMD ["npm", "start"]
