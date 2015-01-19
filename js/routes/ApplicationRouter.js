define([
  'jquery',
  'underscore',
  'backbone',
  'app', 
  'collections/CourseCollection',
  'views/CourseListView',
  'views/TimeTableView',
  'views/TimeTableDetailView',
  'views/FilterView'
], function ( $, _, Backbone, CoursePicker, CourseCollection, CourseListView, TimeTableView, TimeTableDetailView, FilterView ) {

    ApplicationRouter = Backbone.Router.extend({

        initialize : function() {
            console.log('Application Router initialized...');

            new TimeTableView({
                collection : CoursePicker.globalTimeTable
            });

            new TimeTableDetailView({
                collection : CoursePicker.globalTimeTable
            });
            
            new CourseListView({
                collection : CoursePicker.globalCourses
            });

            new FilterView({
                collection : CoursePicker.globalCourses
            });
        },

    });

    return ApplicationRouter;

});