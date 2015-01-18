CoursePicker.Views.ChosenCourseItemView = Backbone.View.extend({
    tagName : 'li',
    className : 'timeTable',

    initialize : function () {
        
        console.log('timeTable view init');
        this.template = _.template($('#timeTableItemTemplate').html());
        this.render();

    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));

    },

});