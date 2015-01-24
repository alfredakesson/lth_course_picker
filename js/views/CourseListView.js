define([
  'jquery',
  'underscore',
  'backbone',
  'views/CourseItemView'
], function ( $, _, Backbone, CourseItemView ) { 

    CourseListView = Backbone.View.extend({
        
        el: '#courseList',

        initialize: function() {
            console.log('course collection view init');
            this.listenTo(this.collection, 'reset', this.render);
        },

        render : function () {
            this.$el.empty();
            this.collection.each(function (course) {
                var view = new CourseItemView({
                    model : course
                })
                this.$el.append(view.el);
            }, this);
        },

    });

    return CourseListView;

});
