define([
  'jquery',
  'underscore',
  'backbone',
  'views/StudyYearItemView',
], function ( $, _, Backbone, StudyYearItemView ) { 

    StudyYearCreateView = Backbone.View.extend({
        
        el : '#studyYearItem',


        initialize : function (args) {  
            //eventuellt så måste den här vänta på ett event tills alla kurser är i collection.
            //men så länge låter vi den rendera direkt. 

            this.filter = args.filter;
            
            $('#addStudyYear').click({filter: this.filter}, this.addStudyYear);
            console.log('INITITII');
            this.render();
        },


        addStudyYear : function (args) {
            var theFilter = args.data.filter;
            theFilter.addStudyYear();
        },

        render : function () {

            this.$el.empty();
            console.log("JAG RENDERAR");
            console.log(this.filter.get('nbrStudyYears'));

            var nbrStudyYears = this.filter.get('nbrStudyYears');
            var offset = this.filter.get('offsetStudyYear');
            console.log('nbr studyyears is ' + nbrStudyYears + ', ')
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
