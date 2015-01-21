define([
  'jquery',
  'underscore',
  'backbone',
  'views/StudyPeriodView'
], function ( $, _, Backbone, StudyPeriodView ) { 

    TimeTableView = Backbone.View.extend({

        el : '#timeTable', 

        initialize : function () {
            
            console.log('timeTable view init');

            this.listenTo(this.collection, 'add', this.onAdd);
            this.render();

        },

        onAdd : function () {

            console.log('onAdd event in timeTableView');
            this.render();

        },

        render : function () {

            console.log("rendering TimeTableView");
            
            this.$el.empty();
            
            var view = new StudyPeriodView({
                'sp' : '1',
                collection : this.collection
            });
            this.$el.append(view.el);

            var view = new StudyPeriodView({
                'sp' : '2',
                collection : this.collection
            });
            this.$el.append(view.el);

            var view = new StudyPeriodView({
                'sp' : '3',
                collection : this.collection
            });
            this.$el.append(view.el);

            var view = new StudyPeriodView({
                'sp' : '4',
                collection : this.collection
            });
            this.$el.append(view.el);
        },

    });

    return TimeTableView;
});