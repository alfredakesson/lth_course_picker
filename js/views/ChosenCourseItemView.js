define([
  'jquery',
  'underscore',
  'backbone',
  'app'
], function ( $, _, Backbone, CoursePicker) { 

    ChosenCourseItemView = Backbone.View.extend({

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            console.log('clicked on chosenItem');
            this.model.destroy();
        },
        
        initialize : function () {            
            this.template = _.template($('#CourseItemTemplate').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
    });

    return ChosenCourseItemView;

});