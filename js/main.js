require([
  'backbone',
  'routes/ApplicationRouter', 
], function ( Backbone, Router ) {

  console.log('Init application...');
  new Router();
  Backbone.history.start();

});