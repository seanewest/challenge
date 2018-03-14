# The start of something cool

### Requirements
- must have docker and node/npm installed
- then just do `npm install`
- Unfortunately one of the npm packages is messed up (docker-browser-server), so I had to do:
```bash
npm uninstall root
npm install blahah/root
rm -rf node_modules/docker-browser-server/node_modules/root
cp -R node_modules/root node_modules/docker-browser-server/node_modules/root
```
- A more permanent solution would be to fork http://github.com/mafintosh/docker-browser-server and then use the fork

### Running
```bash
npm start
```
which just runs `start.sh`, so instead you could just:
```bash
./start.sh
```
