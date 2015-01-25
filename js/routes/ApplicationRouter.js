define([
  'jquery',
  'underscore',
  'backbone',
  'app', 
  'collections/CourseCollection',
  'views/CourseListView',
  'views/TimeTableView',
  'views/TimeTableDetailView',
  'views/FilterSpecializationView',
  'views/FilterStudyPeriodView'
], function ( $, _, Backbone, CoursePicker, CourseCollection, CourseListView, TimeTableView, TimeTableDetailView, FilterSpecializationView, FilterStudyPeriodView ) {


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
            
            new CourseListView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters
            });
            
            new FilterSpecializationView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters,
            });

            new FilterStudyPeriodView({
                collection : CoursePicker.globalCourses,
                filter : CoursePicker.globalFilters,
            })
        },

    });

    return ApplicationRouter;

});