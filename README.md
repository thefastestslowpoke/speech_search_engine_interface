This project is made for the senior design project of A.Furkan Turan

There are two javascript nodes. bridge.js translates between http and tcp for the speech search engines connection with the web page. server_test.js takes any message from tcp and without talking with the server, sends back the results for the query "haber".
client.html is the web page and it is executable by any browser.
run.sh only launches the the client on firefox and the translator as a node.

To install just copy and paste the following lines to a terminal and make sure no error is received.

sudo apt-get update
sudo apt-get install node.js
sudo apt-get install npm
sudo apt-get install curl
sudo apt-get install nodejs-legacy
npm install ws
npm install buffer
npm install net
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
command -v nvm
source ~/.bashrc
nvm install node
nvm use node
