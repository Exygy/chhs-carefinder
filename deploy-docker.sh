#!/bin/bash
npm run deploy:prod
cp -r dist ../chhs-carefinder-deploy
cd ../chhs-carefinder-deploy/dist
git add .
git commit -am 'Deploying latest CHHS App'
git push origin master

########################################################
#### Post-deploy commands to be set up on Docker server
# docker stop $(docker ps -a -q)
# docker rm $(docker ps -a -q)
# docker build -t chhs-carefinder .
# docker run -p 80:80 -d chhs-carefinder
