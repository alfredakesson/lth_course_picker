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
            console.log(CoursePicker.globalFilters);
            new TimeTableView({
                collection : CoursePicker.globalTimeTable
            });

            new TimeTableDetailView({
                collection : CoursePicker.globalTimeTable
            });
            
            var CL = new CourseListView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters
            });
            
            new FilterView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters,
                CL : CL

            });
        },

    });

    return ApplicationRouter;

});