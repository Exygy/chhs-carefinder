#!/bin/bash
npm run deploy:prod

DIST=dist
if [ ! -d "$DIST" ]; then
	echo "** Uh oh! **"
	echo "Directory '$DIST' does not exist -- you need to run 'npm start' before deploying."
	exit
fi
cd $DIST
git init
app="chhs-carefinder"
echo '{
  "require": {
    "php": "^5.6.0"
  }
}' > composer.json
echo '{
    "_readme": [
        "This file locks the dependencies of your project to a known state",
        "Read more about it at http://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file",
        "This file is @generated automatically"
    ],
    "hash": "35ebe24ec8efc38b3b544041896aa986",
    "packages": [],
    "packages-dev": [],
    "aliases": [],
    "minimum-stability": "stable",
    "stability-flags": [],
    "prefer-stable": false,
    "prefer-lowest": false,
    "platform": {
        "php": "^5.6.0"
    },
    "platform-dev": []
}' > composer.lock
echo 'web: vendor/bin/heroku-php-nginx' > Procfile
git remote add $app https://git.heroku.com/$app.git
git add .
git commit -am 'Deploying latest CHHS App to heroku'
git push --force $app master
rm composer.*
rm Procfile
rm -rf .git
