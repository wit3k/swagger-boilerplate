#!/bin/bash
sudo npm install -g swagger-cli
git clone https://github.com/swagger-api/swagger-ui.git
cd swagger-ui
npm install
cd ../serve-yaml
npm install
