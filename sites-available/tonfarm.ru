server {
        listen 443 ssl;

        server_name 82.148.29.23 tonfarm.ru;

        ssl_certificate /etc/ssl/tonfarm.ru.crt;
        ssl_certificate_key /etc/ssl/tonfarm.ru.key;

        location / {
                proxy_pass http://localhost:8001;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}