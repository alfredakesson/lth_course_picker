define([
  'jquery',
  'underscore',
  'backbone',
  'models/ChosenCourseModel'
], function ( $, _, Backbone, ChosenCourseModel ) { 

	TimeTableCollection = Backbone.Collection.extend({

	    model: ChosenCourseModel,
	    //localStorage: new Backbone.LocalStorage("timeTable"),

	    addToTimeTable : function (chosenCourse) {
	    	this.add(chosenCourse);
	    	//this.invoke('save');
	    },

	});

	return TimeTableCollection;

});