define([
  'jquery',
  'underscore',
  'backbone',
  'views/StudyPeriodView'
], function ( $, _, Backbone, StudyPeriodView ) { 

    TimeTableView = Backbone.View.extend({

        /*el : '#timeTable', */

        initialize : function (args) {
            
            console.log('timeTable view init');
            this.studyYear = args.studyYear;
            this.render();

        },

        render : function () {

            console.log("rendering TimeTableView");
            
            var currYear = this.studyYear;

            this.$el.append('<h5>Läsperiod 1</h5>');

            var view = new StudyPeriodView({
                'sp' : '1',
                'studyYear' : currYear,
                collection : this.collection
            });
            this.$el.append(view.el);

            this.$el.append('<h5>Läsperiod 2</h5>');

            var view = new StudyPeriodView({
                'sp' : '2',
                'studyYear' : currYear,
                collection : this.collection
            });
            this.$el.append(view.el);

            this.$el.append('<h5>Läsperiod 3</h5>');

            var view = new StudyPeriodView({
                'sp' : '3',
                'studyYear' : currYear,
                collection : this.collection
            });
            this.$el.append(view.el);

            this.$el.append('<h5>Läsperiod 4</h5>');

            var view = new StudyPeriodView({
                'sp' : '4',
                'studyYear' : currYear,
                collection : this.collection
            });
            this.$el.append(view.el);

            this.$el.append('<h5>Utan läsperiod</h5>');
            
            var view = new StudyPeriodView({
                'sp' : '5',
                'studyYear' : currYear,
                collection : this.collection
            });
            this.$el.append(view.el);

        },

    });

    return TimeTableView;
});