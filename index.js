/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-zingchart',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/zingchart/client/zingchart.min.js');
    app.import(app.bowerDirectory + '/zingchart/client/modules/*.js');
  }
};
