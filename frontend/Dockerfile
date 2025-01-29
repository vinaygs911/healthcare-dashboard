# Use NGINX as base image
FROM nginx:latest

# Copy Angular build output to NGINX HTML directory
COPY dist/frontend /usr/share/nginx/html

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
