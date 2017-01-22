const MongoClient = require('mongodb').MongoClient;
const config = require('../../../cfg/cfg.json');

function getAllRoutes () { 
  return MongoClient.connect(config.mongoDb.url)
    .then((db) => {
      let routes = db.collection('routes');
      return routes.find({});
    });
}

module.exports = getAllRoutes;