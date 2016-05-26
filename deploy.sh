#!/bin/bash
git checkout deploy
npm run deploy:prod
git commit -am 'Deploying latest CHHS Docker app'
git push origin deploy
