define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/StudyYearItemViewTemplate.html'
], function ( $, _, Backbone, temp ) { 

    StudyYearItemView = Backbone.View.extend({
         
        tagName : 'li',
          
        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            this.chooseStudyYear();
        },

        initialize : function (args) {  
            this.studyYear = args.studyYear;
            this.template = _.template(temp);
            this.filter = args.filter;
            this.render();
            
        },

        render : function () {
            var offsetYear = this.filter.get('offsetStudyYear');
            var isActive = this.filter.get('activeStudyYear') === (this.studyYear - offsetYear);
            this.$el.html(this.template({
                'studyYear'   : this.studyYear,
                'isActive'    : isActive    
            }));
        },

        chooseStudyYear : function () {
            var filter = this.filter;
            var studyYear = this.studyYear;

            var activeYear = studyYear - filter.get('offsetStudyYear');
            filter.set('activeStudyYear', activeYear);
            filter.trigger('change');
            filter.save();
        }

    });

    return StudyYearItemView;

});