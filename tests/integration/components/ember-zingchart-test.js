import { moduleForComponent, test } from 'ember-qunit';
//import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-zingchart', 'Integration | Component | ember zingchart', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  //TODO: need a stub like this one for PhantomJS
  window.zingchart = {
    render: function() {},
    exec: function() {}
  };

  this.set('myRenderOptions', {});

  //this.render(hbs`{{ember-zingchart renderOptions=myRenderOptions}}`);

  //assert.equal(this.$().text().trim(), '');
});
