define([
  'jquery',
  'underscore',
  'backbone',
  'models/ChosenCourseModel',
  'models/CourseModel',
  'app'
], function ( $, _, Backbone, ChosenCourseModel, CourseModel, CoursePicker ) { 

    CourseItemView = Backbone.View.extend({

        tagName : 'li',
        className : 'courseItem',

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            console.log('click! '+this.model.id);
            this.$el.addClass('highlight');
            this.addToTimeTable();
        },

        addToTimeTable : function () {
            var course = new ChosenCourseModel({
                course : this.model
            });

            CoursePicker.globalTimeTable.addToTimeTable(course);
        },

        initialize : function () {
            this.template = _.template($('#courseItemTemplate').html());
            this.render();

        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));

        }

    });

    return CourseItemView;

});