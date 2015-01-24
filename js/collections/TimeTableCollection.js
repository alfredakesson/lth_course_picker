define([
  'jquery',
  'underscore',
  'backbone',
  'models/ChosenCourseModel',
  'collections/CourseCollection'
], function ( $, _, Backbone, ChosenCourseModel, CourseCollection ) { 

	TimeTableCollection = CourseCollection.extend({

	    model: ChosenCourseModel,
	    //localStorage: new Backbone.LocalStorage("timeTable"),

	    addToTimeTable : function (chosenCourse) {
            this.add(chosenCourse);
	    	//this.invoke('save');
	    },

        initialize: function () {

        },

	    totalCredits : function () {
            total = 0;
            this.each(function (course) {
                total += parseFloat(course.get('poang'));
            });
            return total;
        },

        // Returns a array of triplet-arrays of the total credits of each specialization.
        // Example: [["bg", "Bilder och grafik", 15], ["pv", "Programvara", 12]]
        eachSpecCredits : function () {

        	var specArrayAbbrev = this.getAllSpecializationNameId();
            var specArrayFull = this.getAllSpecializationName();
            that = this;
        	var creditsArray = _.map(specArrayAbbrev, function(spec) {
        		var currCredits = 0;
        		that.each(function (course) {
                    var currentSpec = course.get('inriktning_id');
        			if (currentSpec === spec) {
        				currCredits += parseFloat(course.get('poang'));
                    }
            	});
                return currCredits;
        	});
            return _.zip(specArrayAbbrev, specArrayFull, creditsArray);
        },

        studyPeriodCredits : function () {
            var creditsArray = [0,0,0,0];
            this.each(function (course) {
                var result = course.getStudyPeriodCredits();
                for (i = 0; i<4; i++) {
                    creditsArray[i] += result[i];
                }
            });
            return creditsArray;
        },

        totalAdvanceCredits : function () {
            total = 0;
            this.each(function (course) {
                if( course.get('niva') === "A" )
                    total += parseFloat(course.get('poang'));
            });
            return total;
        }


	});

	return TimeTableCollection;

});