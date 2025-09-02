# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json + lock files first for caching
COPY package*.json ./

RUN npm install

# Copy the rest of the app
COPY . .

# Build optimized production files
RUN npm run build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:1.27-alpine

# Copy built files to Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional, for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
