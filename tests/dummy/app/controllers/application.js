import Ember from 'ember';

export default Ember.Controller.extend({
	myChartData:{
		"type":"line",
		"title":{
			"text":"Average Metric"
		},
		"series":[
		{
			"values":[69,68,54,48,70,74,98,70,72,68,49,69]
		},
		{
			"values":[51,53,47,60,48,52,75,52,55,47,60,48]
		},
		{
			"values":[42,43,30,40,31,48,55,46,48,32,38,38]
		},
		{
			"values":[25,15,26,21,24,26,33,25,15,25,22,24]
		}
		]
	},
	myRenderOptions:{
		"height":400,
		"width":"100%",
		"events":{
			node_click:function(p){
				console.log(p);
			}
		}
	},
	myThemeData:{
		"palette" : {
			"line" : [
			["#ffffff", "#196eed", "#196eed", "#196eed"],
			["#ffffff", "#d94530", "#d94530", "#d94530"],
			["#ffffff", "#fdb82b", "#fdb82b", "#fdb82b"],
			["#ffffff", "#159755", "#159755", "#159755"],
			["#ffffff", "#8e8e8e", "#8e8e8e", "#8e8e8e"]
			]
		},
		"graph" : {
			"background-color":"#f9f9f9",
			"border-color":"#ddd",
			"border-width":"1px",
			"border-style":"solid",
			"border-radius":5,
			"title" : {
				"background-color" : "#5f9af3",
				"height":"30px",
				"align":"center",
				"font-color" : "#fff",
				"border-radius-top-left":5,
				"border-radius-top-right":5
			},
		}
	} 
});