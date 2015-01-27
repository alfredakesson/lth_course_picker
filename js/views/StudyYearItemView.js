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
            this.filter = args.filter;
            this.render();
            
        },

        render : function () {
            var isActive = this.filter.get('activeStudyYear') === this.studyYear;
            this.$el.html(this.template({
                'studyYear'   : this.studyYear,
                'isActive'    : isActive    
            }));

            $('#studyYearItem').click({
              'studyYear' : this.studyYear,
              'filter'    : this.filter 
            }, this.chooseStudyYear);
        },

        chooseStudyYear : function (args) {
            var filter = args.data.filter;
            var studyYear = args.data.studyYear;

            var activeYear = studyYear - filter.get('offsetStudyYear');
            filter.set('activeStudyYear', activeYear);
            filter.trigger('change');
            filter.save();
            console.log(filter);
        }

    });

    return StudyYearItemView;

});