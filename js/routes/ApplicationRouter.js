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
  'views/FilterStudyPeriodView',
  'views/StudyYearCreateView'
], function ( $, _, Backbone, CoursePicker, CourseCollection, CourseListView, TimeTableView, TimeTableDetailView, FilterSpecializationView, FilterStudyPeriodView, StudyYearCreateView ) {


    ApplicationRouter = Backbone.Router.extend({
        
        initialize : function() {
            console.log('Application Router initialized...');


            new TimeTableView({
                collection : CoursePicker.globalTimeTable
            });

            new TimeTableDetailView({
                collection : CoursePicker.globalTimeTable
            });

            new StudyYearCreateView({
                collection : CoursePicker.globalTimeTable,
                filter : CoursePicker.globalFilters              
            });

            CoursePicker.globalCourses.fetch({ reset: true });
            CoursePicker.globalTimeTable.fetch();
            CoursePicker.globalFilters.fetch();

            new StudyYearCreateView({
                filter     : CoursePicker.globalFilters,
                collection : CoursePicker.globalTimeTable
            });
            
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
            });
        },

    });

    return ApplicationRouter;

});