import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['zingchart-ember'],

	renderOptions: undefined,

  // http://www.zingchart.com/docs/developers/zingchart-object-and-methods/#render-method
  _defaultRenderOptions: {
    // minimal config
	  id: null,
    data: null,
    height: 400,
    width: 600,
    // optional defaults
	  output: 'svg',
    hideprogresslogo: true,
    'type': null,
    'labels': [
      {
        'width': '10%',
        'x': '45%',
        'y': '50%',
        'text': 'Error Loading Data!',
        'background-color': 'white',
        'border-width': 1,
        'border-color': 'black',
        'border-radius': 6,
        'padding': 10,
        'color': 'red',
        'font-weight': 'bold',
        'font-size': 12,
        'wrap-text': true,
        'shadow': 0
      }
    ]
  },

  _overwriteDefaultRenderOptions: function(renderOptions) {
    this._defaultRenderOptions.id = this.elementId;

    // Overwrite the defaults with the passed config
    for (let key of Object.keys(renderOptions)) {
      this._defaultRenderOptions[key] = renderOptions[key];
    }

    return this._defaultRenderOptions;
  },

	didInsertElement: function() {
		this.renderLater();
	},

	renderLater:function() {
		Ember.run.scheduleOnce('afterRender', this, '_renderChart');
	},

	_renderChart: function() {
    let renderOptions = this.get('renderOptions');
    renderOptions = this._overwriteDefaultRenderOptions(renderOptions);
		zingchart.render(renderOptions);
	},

	_destroyChart: Ember.on('willDestroyElement', function() {
		var self=this;
		zingchart.exec(self.elementId,'destroy');
	})

});
