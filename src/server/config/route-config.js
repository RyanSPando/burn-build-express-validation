(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const kittens = require('../routes/kittens');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/kittens', kittens);

  };

})(module.exports);
