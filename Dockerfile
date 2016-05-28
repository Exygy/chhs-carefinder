FROM kyma/docker-nginx
COPY dist/ /var/www
# custom nginx.conf
COPY nginx.conf /etc/nginx/sites-enabled/default
CMD 'nginx'
