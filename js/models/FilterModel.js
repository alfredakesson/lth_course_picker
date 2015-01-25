define([
  'jquery',
  'underscore',
  'backbone'
  ], function ( $, _, Backbone ) { 

    FilterModel = Backbone.Model.extend({

        initialize: function () {
            this.lasperioder = [true, true, true, true];
            this.inriktning_id = 'none';
        },

        resetStudyPeriod : function () {
            this.lasperioder = [true, true, true, true];
            this.trigger('change');
        },
        
        toggleStudyPeriod : function (sp) {
            this.lasperioder[sp-1] = !this.lasperioder[sp-1];
            this.trigger('change');
        },

        setSpecialization : function (spec) {
            this.inriktning_id = spec;
            this.trigger('change');
        }
      
    });

    return FilterModel;
});

