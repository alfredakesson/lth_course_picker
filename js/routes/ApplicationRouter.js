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
  'views/StudyYearCreateView',
  'views/StudyYearTimeTableView'
], function ( $, _, Backbone, CoursePicker, CourseCollection, CourseListView, TimeTableView, TimeTableDetailView, FilterSpecializationView, FilterStudyPeriodView, StudyYearCreateView, StudyYearTimeTableView ) {


    ApplicationRouter = Backbone.Router.extend({
        
        initialize : function() {
            console.log('Application Router initialized...');


            new TimeTableDetailView({
                collection : CoursePicker.globalTimeTable
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


            new StudyYearTimeTableView({
                collection: CoursePicker.globalTimeTable,
                filter: CoursePicker.globalFilters
            })

        },

    });

    return ApplicationRouter;

});