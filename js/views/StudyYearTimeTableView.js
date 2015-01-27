define([
  'jquery',
  'underscore',
  'backbone',
  'views/StudyPeriodView'
], function ( $, _, Backbone, StudyPeriodView ) { 

    StudyYearTimeTableView = Backbone.View.extend({

        el : '#timeTable', 

        initialize : function (args) {
            this.filter = args.filter;
            this.listenTo(this.filter, 'change', this.render);
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);

            this.render();
        },

        render : function () {
            this.$el.empty();

            var nbrStudyYears = this.filter.get('nbrStudyYears');
            var offset = this.filter.get('offsetStudyYear');
            var studyYear = this.filter.get('activeStudyYear');

            for (var i = 0; i < nbrStudyYears; i++) {                
                this.$el.append('<h4>Läsår ' + (i + offset) + '</h4>');

                var view = new TimeTableView({
                    collection : this.collection,
                    studyYear  : i
                });            
                this.$el.append(view.el);

            }
            
            
            //this.$el.append(view.el);
        },

    });

    return StudyYearTimeTableView;
});