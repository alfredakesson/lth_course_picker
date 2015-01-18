define([
  'collections/TimeTableCollection',
  'collections/CourseCollection',
], function ( TimeTableCollection, CourseCollection ) {

	var timeTableCollection = new TimeTableCollection();
	var courses = new CourseCollection(ourData);

	return {
		globalTimeTable : timeTableCollection,
		globalCourses: courses
	};
});