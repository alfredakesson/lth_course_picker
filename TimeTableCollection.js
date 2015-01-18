CoursePicker.Collections.TimeTableCollection = Backbone.Collection.extend({

    model: CoursePicker.Models.ChosenCourseModel,
    localStorage: new Backbone.LocalStorage("timeTable"),

    addToTimeTable : function (chosenCourse) {
    	this.add(chosenCourse);
    	//this.invoke('save');
    },

});