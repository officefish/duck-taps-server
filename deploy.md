# copy src from locahost to server
scp -r D:/nest/duck-taps-server/src root@45.8.250.204:/var/www/nestjs-app

# restart server
sudo systemctl restart diarma.service

# connect to server
ssh root@45.8.250.204