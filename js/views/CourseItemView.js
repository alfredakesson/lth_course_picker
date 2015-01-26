define([
  'jquery',
  'underscore',
  'backbone',
  'models/ChosenCourseModel',
  'models/CourseModel',
  'app',
  'text!templates/CourseItemTemplate.html'
], function ( $, _, Backbone, ChosenCourseModel, CourseModel, CoursePicker ,temp) { 

    CourseItemView = Backbone.View.extend({

        tagName : 'li',
        className : 'courseItem',

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            console.log('click!');
            this.addToTimeTable();
        },

        addToTimeTable : function () {
            var course = new ChosenCourseModel(this.model.toJSON());

            CoursePicker.globalTimeTable.addToTimeTable(course);
        },

        initialize : function () {
            this.template = _.template(temp);
            this.render();

        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));

        }

    });

    return CourseItemView;

});