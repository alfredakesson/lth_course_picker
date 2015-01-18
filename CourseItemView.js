CoursePicker.Views.CourseItemView = Backbone.View.extend({

    tagName : 'li',
    className : 'courseItem',

    events : {
        'click' : 'onclick',
    },

    onclick : function () {
        console.log('click! '+this.model.id);
        this.$el.addClass('highlight');
        this.addToTimeTable();
    },

    addToTimeTable : function () {
        // skapa en ny timeTableItem att lägga i cart
        var course = new CoursePicker.Models.ChosenCourseModel({
            course : this.model
        });

        CoursePicker.globalTimeTable.addToTimeTable(course);
    },

    initialize : function () {
        this.template = _.template($('#courseItemTemplate').html());
        this.render();

    },

    render : function () {
        this.$el.html(this.template(this.model.toJSON()));

    }

});