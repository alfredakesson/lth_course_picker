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
            console.log("TEST");
            console.log(args);

            $('#addStudyYear').click({filter: this.filter}, this.addStudyYear);

            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'destroy', this.render);
            this.render();
        },


        addStudyYear : function (args) {
            var theFilter = args.data.filter;
            theFilter.addStudyYear();
        },

        render : function () {

            this.$el.empty();

            
        },

    });

    return StudyYearCreateView;

});
