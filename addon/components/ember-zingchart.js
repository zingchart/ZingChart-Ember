import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['zingchart-ember'],
	renderOptions:undefined,
	chartData:undefined,
	themeData:undefined,

	buildOptions: Ember.computed('renderOptions', 'chartData.@each.isLoaded', 'themeData', function() {
		var renderOptions,chartData,themeData;
		var self=this;

		renderOptions=this.get('renderOptions') ? this.get('renderOptions') : {
			'id':self.elementId,
			'output':'canvas',
			'hideprogresslogo':true
		};
		renderOptions['id']=self.elementId;
		renderOptions['output']='svg';

		chartData = this.get('chartData') ? this.get('chartData') : {
			'type':null,
			'labels':[
				{
					'width':'10%',
					'x':'45%',
					'y':'50%',
					'text':'Error Loading Data!',
					'background-color':'white',
					'border-width':1,
					'border-color':'black',
					'border-radius':6,
					'padding':10,
					'color':'red',
					'font-weight':'bold',
					'font-size':12,
					'wrap-text':true,
					'shadow':0
				}
			]
		};

		themeData = this.get('themeData') ? this.get('themeData') : null;

		return [renderOptions,chartData,themeData];
	}),
	_renderChart: (function() {
		this.renderLater();
	}).on('didInsertElement'),
	renderLater:function(){
		Ember.run.scheduleOnce('afterRender',this,'render');
	},
	render:function(){
		var buildOptions=this.get('buildOptions');
		var options=buildOptions[0];
		options['data']=buildOptions[1];
		if(buildOptions[2]!=null){
			options['defaults']=buildOptions[2];
		}
		zingchart.render(options);
	},
	_destroyChart: (function() {
		var self=this;
		zingchart.exec(self.elementId,'destroy');
	}).on('willDestroyElement')

});
