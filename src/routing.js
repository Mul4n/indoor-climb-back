const route = require('./middlewares/route.js');

const routes = [
  {
    requestType: 'get',
    path: '/routes',
    middlewares: [
      route.getAllRoutes
    ],
  }
];

function setupRoutes (server) {
  routes.forEach((route) => {
    server[route.requestType](route.path, route.middlewares);
  });
}

module.exports = setupRoutes;