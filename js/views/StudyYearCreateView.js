define([
  'jquery',
  'underscore',
  'backbone',
  'views/StudyYearItemView',
], function ( $, _, Backbone, StudyYearItemView ) { 

    StudyYearCreateView = Backbone.View.extend({
        
        el : '#studyYearItem',


        initialize : function (args) {  
            this.filter = args.filter;
            
            $('#addStudyYear').click({filter: this.filter}, this.addStudyYear);
            $('#removeStudyYear').click({filter: this.filter, collection: this.collection}, this.removeStudyYear);

            this.listenTo(this.filter, 'change', this.render);

            this.render();
        },


        addStudyYear : function (args) {
            var theFilter = args.data.filter;
            theFilter.addStudyYear();
        },

        removeStudyYear : function (args) {
            var theFilter = args.data.filter;
            var theCollection = args.data.collection;
            var yearToRemove = theFilter.get('nbrStudyYears') - 1;

            if(yearToRemove === 0) 
                return;

            console.log(theCollection);
            theCollection.each(function (course) {
                if (course.get('studyYear') === yearToRemove) {
                    course.destroy();
                }
            });
            theFilter.set('nbrStudyYears', yearToRemove);
            theFilter.set('activeStudyYear', yearToRemove - 1);
            theFilter.trigger(change);

        },

        render : function () {

            this.$el.empty();

            var nbrStudyYears = this.filter.get('nbrStudyYears');
            var offset = this.filter.get('offsetStudyYear');
            
            for (var i = 0; i < nbrStudyYears; i++) {
                var view = new StudyYearItemView({
                    'studyYear'   : i + offset,
                    'filter'      : this.filter
                });
                this.$el.append(view.el);
            }
        },

    });


    return StudyYearCreateView;

});
