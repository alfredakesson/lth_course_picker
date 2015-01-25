define([
  'jquery',
  'underscore',
  'backbone',
  'app', 
  'collections/CourseCollection',
  'views/CourseListView',
  'views/TimeTableView',
  'views/TimeTableDetailView',
  'views/FilterView',
  'views/FilterStudyPeriodView'
], function ( $, _, Backbone, CoursePicker, CourseCollection, CourseListView, TimeTableView, TimeTableDetailView, FilterView, FilterStudyPeriodView ) {


    ApplicationRouter = Backbone.Router.extend({
        
        initialize : function() {
            console.log('Application Router initialized...');


            new TimeTableView({
                collection : CoursePicker.globalTimeTable
            });

            new TimeTableDetailView({
                collection : CoursePicker.globalTimeTable
            });

            CoursePicker.globalCourses.fetch({ reset: true });
            
            var CL = new CourseListView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters
            });
            
            new FilterView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters,
                CL : CL

            });

            new FilterStudyPeriodView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters,
            })
        },

    });

    return ApplicationRouter;

});