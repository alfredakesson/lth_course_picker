define([
  'collections/TimeTableCollection',
  'collections/CourseCollection',
], function ( TimeTableCollection, CourseCollection ) {

	//var courses = new CourseCollection(ourData);
	var courses = new CourseCollection();	
	var timeTableCollection = new TimeTableCollection();

	return {
		globalCourses: courses,
		globalTimeTable : timeTableCollection
	};
});