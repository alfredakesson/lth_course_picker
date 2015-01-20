define([
  'jquery',
  'underscore',
  'backbone',
  'models/ChosenCourseModel'
], function ( $, _, Backbone, ChosenCourseModel ) { 

	TimeTableCollection = CourseCollection.extend({

	    model: ChosenCourseModel,
	    //localStorage: new Backbone.LocalStorage("timeTable"),

	    addToTimeTable : function (chosenCourse) {
	    	this.add(chosenCourse);
	    	//this.invoke('save');
	    },

	    totalCredits : function () {
            total = 0;
            this.each(function (course) {
                total += parseFloat(course.get('credits'));
            });
            return total;
        },

        // Returns a array of triplet-arrays of the total credits of each specialization.
        // Example: [["bg", "Bilder och grafik", 15], ["pv", "Programvara", 12]]
        eachSpecCredits : function () {
        	var specArrayAbbrev = this.findAllSpecializations('abbrev');
            var specArrayFull = this.findAllSpecializations('fullName');
            
            that = this;
        	var creditsArray = _.map(specArrayAbbrev, function(spec) {
        		var currCredits = 0;
        		that.each(function (course) {
                    var currentSpec = course.get('specialization');
        			if (_.contains(currentSpec, spec))
        				currCredits += parseFloat(course.get('credits'));

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
                if( course.get('cycle') == "A" )
                    total += parseFloat(course.get('credits'));
            });
            return total;
        }


	});

	return TimeTableCollection;

});