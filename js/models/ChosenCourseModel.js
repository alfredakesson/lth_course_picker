define([
  'jquery',
  'underscore',
  'backbone',
  'models/CourseModel'
], function ( $, _, Backbone, CourseModel ) { 
    
    ChosenCourseModel = CourseModel.extend({

        initialize : function () {
        }
    });

    return ChosenCourseModel;
});
