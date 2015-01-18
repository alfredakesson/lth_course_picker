CoursePicker.Views.TimeTableDetailView = Backbone.View.extend({

    el : '#timeTableDetails',
    
    initialize : function () {
        console.log('detailView init');
        this.template = _.template($('#detailTemplate').html());
        this.listenTo(this.collection, 'add', this.onAdd);
    },

    onAdd : function () {
        this.render();
    },

    render : function () {
        this.$el.empty();
        this.$el.html(this.template({
            totalCredit: this.totalCredits()
        }));
    },

    totalCredits : function () {
        total = 0;
        this.collection.each(function (course) {
            total += parseInt(course.get('credits'),10);
        }, this);
        return total;
    }
});