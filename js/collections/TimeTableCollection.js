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
                total += parseInt(course.get('credits'),10);
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
        				currCredits += parseInt(course.get('credits'),10);

            	});
                return currCredits;
        	});
            return _.zip(specArrayAbbrev, specArrayFull, creditsArray);
        },

        totalAdvanceCredits : function () {
            total = 0;
            this.each(function (course) {
                if( course.get('cycle') == "A" )
                    total += parseInt(course.get('credits'),10);
            });
            return total;
        }


	});

	return TimeTableCollection;

});