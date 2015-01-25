define([
  'collections/TimeTableCollection',
  'collections/CourseCollection',
  'models/FilterModel'
], function ( TimeTableCollection, CourseCollection , FilterModel) {

	//var courses = new CourseCollection(ourData);
	var courses = new CourseCollection();	
	var timeTableCollection = new TimeTableCollection();
    var filters = new FilterModel();

	return {
		globalTimeTable : timeTableCollection,
		globalCourses 	: courses,
        globalFilters 	: filters
	};
});