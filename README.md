# ember-zingchart 

A ZingChart component for Ember CLI 

## Installation 

* `npm install --save-dev ember-zingchart`
* `ember g ember-zingchart`

## Usage

In your template:  

```handlebars
{{ember-zingchart renderOptions=myRenderOptions chartData=myChartData themeData=myThemeData}}
```

Only `chartData` is required to output a chart -- `renderOptions` and `themeData` will be set to default values if not defined in the handlebars template element and controller. 
Set the values for `renderOptions`, `chartData`, and `themeData` in a controller:

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
	myRenderOptions:{
		"height":400,
		"width":"100%",
		"events":{
			node_click:function(p){
				console.log(p);
			}
		}
	},
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
		}
		]
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
			"border-radius":5
		}
	} 
});
```

For more information on using ZingChart, visit [http://www.zingchart.com/docs/](http://www.zingchart.com/docs/).

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/). 
