define([
  'jquery',
  'underscore',
  'backbone',
  'models/CourseModel'
], function ( $, _, Backbone, CourseModel ) { 
    
    ChosenCourseModel = CourseModel.extend({

        initialize : function () {

            var course = this.get('course');
            this.id = course.get('id');

            this.set('kursnamn', course.get('kursnamn'));
            this.set('kurskod', course.get('kurskod'));
            this.set('poang', course.get('poang'));
            this.set('niva', course.get('niva'));
            this.set('inriktning_id', course.get('inriktning_id'));
            this.set('inriktning', course.get('inriktning'));
            this.set('periodiserad', course.get('periodiserad'));
            this.set('lasperioder', course.get('lasperioder'));
            this.set('sprak', course.get('sprak'));
            this.set('ingar_i_arskurs', course.get('ingar_i_arskurs'));
            this.set('typ', course.get('typ'));
            this.set('program', course.get('program'));
            this.set('program_id', course.get('program_id'));
            this.set('webbsidor', course.get('webbsidor'));
            this.set('fotnot', course.get('fotnot'));
        }
    });

    return ChosenCourseModel;
});