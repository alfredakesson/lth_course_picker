require([
  'backbone',
  'routes/ApplicationRouter', 
  'app',
  'views/TimeTableView' 
], function ( Backbone, Router, CoursePicker, TimeTableView ) {

  console.log('Init application...');
  new TimeTableView({
    collection : CoursePicker.globalTimeTable
  });

  new Router();
  Backbone.history.start();

});