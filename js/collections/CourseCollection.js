define([
  'jquery',
  'underscore',
  'backbone',
  'models/CourseModel',
], function ( $, _, Backbone, CourseModel ) { 

    CourseCollection = Backbone.Collection.extend({
        
        url: "lth_simple_course_parser/server.php",
        model: CourseModel,

        getAllSpecializationNameId: function () {
            return _.uniq(this.pluck('inriktning_id'));
        },
        
        getAllSpecializationName: function () {
            return _.uniq(this.pluck('inriktning'));  
        },

        parse: function(response){
            return response;
        },

        initialize: function () {
            console.log('init courseCollection');
        },

    });

    return CourseCollection;
});