require([
  'backbone',
  'routes/ApplicationRouter', 
], function ( Backbone, Router ) {

 
  new Router();
  Backbone.history.start();

});