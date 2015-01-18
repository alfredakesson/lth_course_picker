define([
  'jquery',
  'underscore',
  'backbone',
  'views/ChosenCourseItemView'
], function ( $, _, Backbone, ChosenCourseItemView ) { 

    TimeTableView = Backbone.View.extend({

        el : '#timeTable', 

        initialize : function () {
            console.log('timeTable view init');
            this.$ul = $('ul', this.$el); // genväg till ul-elementet 

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
            this.collection.each(function (course) {
                var view = new ChosenCourseItemView({
                    model : course
                });
                this.$el.append(view.el);
            }, this);
        },

    });

    return TimeTableView;
});