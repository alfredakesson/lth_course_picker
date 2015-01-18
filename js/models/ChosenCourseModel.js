define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    ChosenCourseModel = CourseModel.extend({

        initialize : function () {

            var course = this.get('course');
            // shortcuts to ease template rendering
            this.id = course.get('id');

            this.set('name', course.get('name'));
            this.set('code', course.get('code'));
            this.set('credits', course.get('credits'));
            this.set('cycle', course.get('cycle'));
            this.set('specialization', course.get('specialization'));
            this.set('on_hold', course.get('on_hold'));
            this.set('study_periods', course.get('study_periods'));
            
        }

    });

    return ChosenCourseModel;
});