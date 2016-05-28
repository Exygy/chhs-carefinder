#!/bin/bash
npm run deploy:prod
git add dist
git commit -m '[deploy] Updating /dist with latest build'
git push origin master
