define([
  'jquery',
  'underscore',
  'backbone',
], function ( $, _, Backbone ) { 

    ChosenCourseItemView = Backbone.View.extend({
        
        initialize : function () {            
            var templateName = '#courseItemTemplate';
            this.template = _.template($(templateName).html());
            this.render();

        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
    });

    return ChosenCourseItemView;

});