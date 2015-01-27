define([
  'jquery',
  'underscore',
  'backbone',
  'views/StudyPeriodView'
], function ( $, _, Backbone, StudyPeriodView ) { 

    StudyYearTimeTableView = Backbone.View.extend({

        el : '#timeTable', 

        initialize : function (args) {
            this.set(args.studyYear);
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            console.log('StudyYearTimeTableView init');
            console.log(this.studyYear);
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            this.render();
        },

        render : function () {

            console.log("rendering StudyYearTimeTableView");
            
            var view = new StudyPeriodView({
                'studyYear': this.studyYear,
                'sp' : '1',
                collection : this.collection
            });
            this.$el.append(view.el);

            var view = new StudyPeriodView({
                'studyYear': this.get('studyYear');
                'sp' : '2',
                collection : this.collection
            });
            this.$el.append(view.el);

            var view = new StudyPeriodView({
                'studyYear': this.get('studyYear');
                'sp' : '3',
                collection : this.collection
            });
            this.$el.append(view.el);

            var view = new StudyPeriodView({
                'studyYear': this.get('studyYear');
                'sp' : '4',
                collection : this.collection
            });
            
            this.$el.append(view.el);
        },

    });

    return StudyYearTimeTableView;
});