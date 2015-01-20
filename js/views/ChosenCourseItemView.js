define([
  'jquery',
  'underscore',
  'backbone',
], function ( $, _, Backbone ) { 

    ChosenCourseItemView = Backbone.View.extend({
        tagName : 'li',
        className : 'timeTable',

        initialize : function () {
            
            console.log('timeTable view init');
            this.template = _.template($('#courseItemTemplate').html());
            this.render();

        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));

        },

    });

    return ChosenCourseItemView;

});