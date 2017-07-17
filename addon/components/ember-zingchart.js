import Ember from 'ember';

// https://www.zingchart.com/docs/api/events/
const EVENT_NAMES = [
// Animation Events
  'animation_end',
  'animation_start',
  'animation_step',
// Data Manipulation Events
  'modify',
  'node_add',
  'node_remove',
  'plot_add',
  'plot_modify',
  'plot_remove',
  'reload',
  'setdata',
// Export Events
  'data_export',
  'image_save',
  'print',
// Feed Events
  'feed_clear',
  'feed_interval_modify',
  'feed_start',
  'feed_stop',
// Global Events
  'click',
  'complete',
  'dataparse',
  'dataready',
  'guide_mousemove',
  'load',
  'menu_item_click',
  'resize',
// Graph Events
  'gcomplete',
  'gload',
// History Events
  'history_back',
  'history_forward',
// History Events
  'node_deselect',
  'node_select',
  'plot_deselect',
  'plot_select',
// Legend Events
  'legend_item_click',
  'legend_marker_click',
// Node Events
  'node_click',
  'node_doubleclick',
  'node_mouseout',
  'node_mouseover',
// Object Events
  'label_click',
  'label_mouseout',
  'label_mouseover',
  'legend_marker_click',
  'shape_click',
  'shape_mouseout',
  'shape_mouseover',
// Plot Events
  'plot_click',
  'plot_doubleclick',
  'plot_mouseout',
  'plot_mouseover',
// Toggle Events
  'about_hide',
  'about_show',
  'bugreport_hide',
  'bugreport_show',
  'dimension_change',
  'legend_hide',
  'legend_maximize',
  'legend_minimize',
  'legend_show',
  'lens_hide',
  'lens_show',
  'plot_hide',
  'plot_show',
  'source_hide',
  'source_show',
// Zoom Events
  'zoom'
];

export default Ember.Component.extend({
  classNames:['zingchart-ember'],

  _eventDispatcher: function (handlerName, event, data) {

    const handler = this.get(handlerName);

    if (handler) {
      return handler(event, data);
    }
    else {
      return data;
    }
  },

  _events: Ember.computed(function(){

    const events = {};
    const eventDispatcher = this.get('_eventDispatcher');

    EVENT_NAMES.forEach(
      eventName => {
        const handlerName = `on_${eventName}`;
        events[eventName] = eventDispatcher.bind(this, handlerName.camelize());
      });

    return events;
  }),

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
    this._defaultRenderOptions.events = this.get('_events');

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
