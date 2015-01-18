CoursePicker.Routers.ApplicationRouter = Backbone.Router.extend({

    initialize : function() {
        console.log('Application Router initialized...');
        this.listCourses();

        CoursePicker.globalTimeTable = new CoursePicker.Collections.TimeTableCollection();

        new CoursePicker.Views.TimeTableView({
            collection : CoursePicker.globalTimeTable
        });

        new CoursePicker.Views.TimeTableDetailView({
            collection : CoursePicker.globalTimeTable
        });
    },

    listCourses : function () {
        CoursePicker.globalCourses = new CoursePicker.Collections.CourseCollection(ourData);
        console.log('list courses');
        new CoursePicker.Views.CourseListView({
            collection : CoursePicker.globalCourses
        });

        //courses.findAllSpecializations('abbrev');
        //courses.showStudyPeriodsArray([1]);
        //console.log(courses.showSpecialization('sp'));
    }
});