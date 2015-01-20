define([
  'jquery',
  'underscore',
  'backbone',
  'models/CourseModel',
], function ( $, _, Backbone, CourseModel ) { 

    CourseCollection = Backbone.Collection.extend({

        model: CourseModel,
        //localStorage: new Backbone.LocalStorage("courses"),

        // return uniq array of all specializations
        // type is either 'abbrev' OR 'fullName', if not, both will be returned as arrays of size 2
        findAllSpecializations: function (type) {

            s = this.pluck('specialization')

            if (type == 'abbrev')
                return _.uniq(_.map(s, function(arr){ return arr[0]; }))
            if (type == 'fullName')
                return _.uniq(_.map(s, function(arr){ return arr[1]; }))
            else 
                return _.uniq(s);
    	},

        showStudyPeriodsArray : function(periods) {
            res = [];
            that = this;
            periods.forEach(function(sp) {
                subRes = that.filter(function(course) {
                    var sp_list = course.attributes.study_periods;
                    return _.find(sp_list, function(e){ return e == sp });
                });
                res = res.concat(subRes);
            });
            return res;
        },

        


        /*showSpecialization: function(spec) {
            filtered = this.filter(function(c) {
                return c.attributes.specialization[0] == spec;
            });
            return new CoursePicker.Collections.CourseCollection(filtered);
        },*/

        /*
        showStudyPeriod: function(sp) {
            //console.log('courseList: filter show study period');
            filtered = this.filter(function(c) {
                var sp_list = c.attributes.study_periods;
                return _.find(sp_list, function(e){ return e == sp });
                
            });
            return new CourseList(filtered);
        },

        showStudyPeriodMultiple: function(periods) {
            return new CourseList(this.showStudyPeriodsArray(periods));
        },

        */

    });

    return CourseCollection;
});