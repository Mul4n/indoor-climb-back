const restify = require('restify');
const setupRoutes = require('./src/routing.js');

var server = restify.createServer();

setupRoutes(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});