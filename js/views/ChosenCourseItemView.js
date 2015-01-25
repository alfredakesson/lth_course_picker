define([
  'jquery',
  'underscore',
  'backbone',
], function ( $, _, Backbone) { 

    ChosenCourseItemView = Backbone.View.extend({
        
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