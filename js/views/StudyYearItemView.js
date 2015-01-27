define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/StudyYearItemViewTemplate.html'
], function ( $, _, Backbone, temp ) { 

    StudyYearItemView = Backbone.View.extend({
        
        initialize : function (args) {  
            this.studyYear = args.studyYear;
            this.template = _.template(temp);
            this.render();
        },

        render : function () {
            this.$el.html(this.template({
                'studyYear' : this.studyYear
            }));
        },

    });

    return StudyYearItemView;

});