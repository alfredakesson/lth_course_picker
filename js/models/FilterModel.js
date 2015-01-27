define([
  'jquery',
  'underscore',
  'backbone'
  ], function ( $, _, Backbone ) { 

    FilterModel = Backbone.Model.extend({
        
        getToggle : function(studyPeriod){
            var number = parseInt(studyPeriod);
            if(isNaN(number)){
                if (studyPeriod === "Periodiserade"){
                    return  this.lasperioder[4];
                }
                return false;
            }
            return  this.lasperioder[number-1];
        
        },

        initialize: function () {
            this.lasperioder = [true, true, true, true,true];
            this.inriktning_id = 'none';
        },

        resetStudyPeriod : function () {
            this.lasperioder = [true, true, true, true,true];
            this.trigger('change');
        },
        
        toggleStudyPeriod : function (sp) {
            if (sp === "Periodiserade"){
                this.lasperioder[4] = !this.lasperioder[4];
            }
            else {
                this.lasperioder[sp-1] = !this.lasperioder[sp-1];
            }
            this.trigger('change');
        },

        setSpecialization : function (spec) {
            this.inriktning_id = spec;
            this.trigger('change');
        }
      
    });

    return FilterModel;
});

