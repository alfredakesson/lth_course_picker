define([
  'jquery',
  'underscore',
  'backbone'
  ], function ( $, _, Backbone ) { 

    FilterModel = Backbone.Model.extend({

    	
      defaults : {

        'inriktning_id'	: '',
        'lasperiod'     : ''

      },

      initialize: function () {

      }
      
    });

    return FilterModel;
  });

