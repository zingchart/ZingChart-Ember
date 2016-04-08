# ember-zingchart 

A ZingChart component for Ember CLI 

## Installation 

* `npm install --save ember-zingchart`
* `ember g ember-zingchart`

## Usage

Use the following custom element to a Handlebars template file:

```handlebars
{{ember-zingchart renderOptions=myRenderOptions}}
```

###Properties
|    Property   |    Required?  | Type | Description  |
| :------------- |:-------------:| :----:| :---- |
| renderOptions | required | Object | [Render method](http://www.zingchart.com/docs/developers/zingchart-object-and-methods/#render-method) configuration object used to configure the individual elements of a chart.|

The configuration object `renderOptions` is stored in an Ember controller.

###Example Controller

For a usage example you can take a look at the
[ApplicationController](tests/dummy/app/controllers/application.js) that is
part of the dummy app in the tests folder.

For more information on using ZingChart, visit [http://www.zingchart.com/docs/](http://www.zingchart.com/docs/).

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/). 
