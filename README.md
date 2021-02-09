# ZingChart-Ember 

A ZingChart component for Ember CLI 

## Resources: 
* [Getting Started Guide](https://blog.zingchart.com/2015/02/24/zingchart-ember-js/) & [Guide Update](https://blog.zingchart.com/2016/04/25/new-ember-charts-wrapper-from-zingchart/?q=new%20ember%20charts%20wrapper%20from%20zingchart)
* [Docs](http://www.zingchart.com/docs) 
* [Support](https://help.zingchart.com/hc/en-us)
* [Stack Overflow](http://stackoverflow.com/search?q=zingchart)


## Installation 

* `npm install --save ember-zingchart`
* `ember g ember-zingchart`

## Usage

Use the following custom element to a Handlebars template file:

```handlebars
{{ember-zingchart renderOptions=myRenderOptions}}
```

### Properties
|    Property   |    Required?  | Type | Description  |
| :------------- |:-------------:| :----:| :---- |
| renderOptions | required | Object | [Render method](http://www.zingchart.com/docs/developers/zingchart-object-and-methods/#render-method) configuration object used to configure the individual elements of a chart.|

The configuration object `renderOptions` is stored in tests/dummy/app/controllers/application.js.

### Example Controller

```
import Ember from 'ember';

let _renderOptions = {
  height: 400,
  width: "100%",
  events: {
    node_click:function(p) {
      console.log(p);
    }
  },
  data: {
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
  defaults: {
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
}; // _renderOptions

export default Ember.Controller.extend({
  // improve the readability of the controller
  // by keeping the actual config object outside 
	myRenderOptions: _renderOptions
});
```
For more information on using ZingChart, visit [http://www.zingchart.com/docs/](http://www.zingchart.com/docs/).

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/). 
