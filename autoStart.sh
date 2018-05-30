#!/bin/bash

cd server
bundle install
sudo rails db:migrate:reset
sudo rails db:seed
sudo rails s -p 4200 -d
if [ $? -ne 0 ]; then
	echo $?
	rails db:migrate:reset
	rails db:seed
	rails s -p 4200 -d
fi
cd ../front
npm install
npm start
