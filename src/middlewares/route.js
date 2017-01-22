const getAllRoutes = require('../libs/route/getAllRoutes.js');

const route  = {
  getAllRoutes: (req, res, next) => {
    getAllRoutes()
      .then((found) => {
        found.toArray((err, items) => {
          res.send(items);
          next();
        });
      });
  }
};

module.exports = route;