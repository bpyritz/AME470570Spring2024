var homeDir = require('path').join(require('os').homedir());
require('greenlock-express').create({
  version: 'draft-11'
, server: 'https://acme-v02.api.letsencrypt.org/directory'
//, server: 'https://acme-staging-v02.api.letsencrypt.org/directory'  // staging
, email: ''                               // CHANGE THIS
, agreeTos: true
, approveDomains: [ '', '' ]              // CHANGE THIS
, store: require('greenlock-store-fs')
, configDir: homeDir
, app: require('./server.js')
//, communityMember: true
}).listen(8080, 8443);
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to 8080
sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to 8443
if (require.main === module) { app.listen(port); }
else{ module.exports = app; }