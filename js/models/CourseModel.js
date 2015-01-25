define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    CourseModel = Backbone.Model.extend({

    	defaults : {
            'kursnamn'        : '',
            'kurskod'         : '',
            'poang'           : 0,
            'niva'            : '',
            'sprak'            : '',
            'ingar_i_arskurs' : 0,
            'typ'             : '',
            'program'         : '',
            'program_id'      : '',
            'webbsidor'       : {},
            'fotnot'          : '',
            'inriktning'      : '',
            'inriktning_id'   : '',
            'periodiserad'    : false,
            'lasperioder'     : []
        },
       	
        initialize: function () {
            
        },

        // we don't know the exact credits in each study period so we guess it is equally much in each sp. 
        // we also guess that there is no course which ends in a new academic year. 
        // we should handle errors here, but we dont do it, since we're lazy :)
        getStudyPeriodCredits : function () {
            var result = [0,0,0,0]
            var credits = parseFloat(this.get('poang'));
            var periodArray = this.get('lasperioder');

            if (periodArray.length === 0)
                return result;

            var index = periodArray[0] - 1;
            /*result[index] = credits;
            return result;
            */
            
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
            return result;
            
        }
        

    });

    return CourseModel;
});

