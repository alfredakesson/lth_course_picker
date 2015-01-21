define([
  'jquery',
  'underscore',
  'backbone',
], function ( $, _, Backbone ) { 

    ChosenCourseItemView = Backbone.View.extend({
        
        initialize : function (args) {            
            var templateName = '#StudyPeriodViewTemplate' + args.sp;
            this.template = _.template($(templateName).html());
            this.render();

        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
    });

    return ChosenCourseItemView;

});