#!/bin/bash

cd server
rails s -p 4200 -d
if [ $? -ne 0 ]; then
	sudo rails s -p 4200 -d
fi
cd ../front
npm start
