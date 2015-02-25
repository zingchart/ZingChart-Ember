/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-zingchart',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/zingchart/zingchart.min.js');
  }
};
