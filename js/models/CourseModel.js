define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    CourseModel = Backbone.Model.extend({

    	
    	defaults : {
    		
    		'id'				: '',
            'code'				: '',
            'name'				: '',
            'credits'			: '',
            'cycle'				: '',
            'specialization'	: [],
            'on_hold'			: '0',
            'study_periods'		: [],

        },
       	
        initialize: function () {
                    
        },

        // we don't know the exact credits in each study period so we guess it is equally much in each sp. 
        // we also guess that there is no course which ends in a new academic year. 
        // we should handle errors here, but we dont do it, since we're lazy :)
        getStudyPeriodCredits : function () {
            var result = [0,0,0,0]
            var credits = parseFloat(this.get('credits'));
            var periodArray = this.get('study_periods');
            var index = periodArray[0] - 1;
            switch (periodArray.length) {
                case 1: 
                    result[index] = credits;
                    break;
                case 2:
                    result[index] = credits / 2;
                    ++index;
                    result[index] = credits / 2;
                    break;
                case 3:
                    result[index] = credits / 3;
                    ++index;
                    result[index] = credits / 3;
                    ++index;
                    result[index] = credits / 3;
                    break;
                case 4:
                    result[index] = credits / 4;
                    ++index;
                    result[index] = credits / 4;
                    ++index;
                    result[index] = credits / 4;
                    ++index;
                    result[index] = credits / 4;
                    break;
            }
            if(index > 3) {
                console.log(result);
            }
            return result;
        }
        

    });

    return CourseModel;
});

