define([
  'jquery',
  'underscore',
  'backbone',
  'views/CourseItemView'
], function ( $, _, Backbone, CourseItemView ) { 

    CourseListView = Backbone.View.extend({
        
        el: '#courseList',

        initialize: function(args) {
            this.filter = args.filter;
            console.log('course collection view init');
            this.listenTo(this.collection, 'reset', this.render);
        },

        render : function () {
            console.log('render');
            var that = this;

            var toCol= this.collection.filter(function(s){
                return that.filter.get("inriktning_id") === s.get('inriktning_id');
            });
            var that = this;
            this.$el.empty();
            _.each(toCol,function (course) {
                var view = new CourseItemView({
                    model : course
                })
                that.$el.append(view.el);
            });
        },

    });

    return CourseListView;

});
