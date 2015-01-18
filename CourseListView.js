CoursePicker.Views.CourseListView = Backbone.View.extend({
    
    el: '#courseList',

    initialize: function() {
        console.log('course collection view init');
        this.render();
    },

    render : function () {
        this.$el.empty();
        this.collection.each(function (course) {
            var view = new CoursePicker.Views.CourseItemView({
                model : course
            })
            this.$el.append(view.el);
        }, this);
    },

});
