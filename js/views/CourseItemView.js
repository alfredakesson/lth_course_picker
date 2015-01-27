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

            var activeYear = this.filter.get('activeStudyYear');
            CoursePicker.globalTimeTable.addToTimeTable(course, activeYear);
        },

        initialize : function (args) {
            this.template = _.template(temp);
            this.filter = args.filter;
            this.render();

        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));

        }

    });

    return CourseItemView;

});