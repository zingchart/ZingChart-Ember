# ember-zingchart 

A ZingChart component for Ember CLI 

## Installation 

* `npm install --save-dev ember-zingchart`
* `ember g ember-zingchart`

## Usage

Use the following custom element to a Handlebars template file:

```handlebars
{{ember-zingchart chartData=myChartData renderOptions=myRenderOptions themeData=myThemeData}}
```

###Properties
|    Property   |    Required?  | Type | Description  |
| :------------- |:-------------:| :----:| :---- |
| chartData | required | Object | Chart configuration object used to configure the individual elements of a chart.|
| renderOptions | optional | Object |Options object used to set zingchart.render() options.|
| themeData | optional | Object | Theme object used to style the elements of a chart. |

The configuration objects for `chartData`, `renderOptions`, and `themeData` are stored in an Ember controller.

###Example Controller

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
