#!/bin/sh
cd server
sudo rails s -p 4200 -d
cd ../front
npm start
