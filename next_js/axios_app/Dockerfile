# Simple Dockerfile for Vulnerable CI Services Next.js app
FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
