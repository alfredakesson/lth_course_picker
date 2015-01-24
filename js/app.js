define([
  'collections/TimeTableCollection',
  'collections/CourseCollection',
  'models/FilterModel'
], function ( TimeTableCollection, CourseCollection , FilterModel) {

	var timeTableCollection = new TimeTableCollection();
	var courses = new CourseCollection(ourData);
    var filters = new FilterModel();

	return {
		globalTimeTable : timeTableCollection,
		globalCourses: courses ,
        globalFilters: filters
	};
});