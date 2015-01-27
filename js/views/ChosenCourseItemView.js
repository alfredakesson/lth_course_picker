define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'text!templates/CourseItemTemplate.html'
], function ( $, _, Backbone, CoursePicker,temp) { 

    ChosenCourseItemView = Backbone.View.extend({

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            this.model.destroy();
        },
        
        initialize : function () {            
            this.template = _.template(temp);
            this.render();
        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
    });

    return ChosenCourseItemView;

});