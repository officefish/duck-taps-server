# copy src from locahost to server
scp -r D:/nest/duck-taps-server/src root@45.8.250.204:/var/www/nestjs-app

# new copy src from localhost to server
scp -r C:/Users/SA19S/nest/duck/src root@45.8.250.204:/var/www/nestjs-app

# restart server
sudo systemctl restart duck-taps.service

# connect to server
ssh root@45.8.250.204

# kill $(lsof -t -i:8001)

