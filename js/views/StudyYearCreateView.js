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
            $('#removeStudyYear').click({filter: this.filter}, this.removeStudyYear);

            this.listenTo(this.filter, 'change', this.render);

            this.render();
        },


        addStudyYear : function (args) {
            var theFilter = args.data.filter;
            theFilter.addStudyYear();
        },

        removeStudyYear : function (args) {
            /*var theFilter = args.data.filter;
            theFilter.addStudyYear();*/
            console.log('REMOVE STUDY YEAR!');
        },

        render : function () {

            this.$el.empty();
            console.log("JAG RENDERAR");
            console.log(this.filter.get('nbrStudyYears'));

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
