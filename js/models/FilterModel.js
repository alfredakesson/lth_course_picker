define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    FilterModel = Backbone.Model.extend({

    	
    	defaults : {
    		
    		'specialization'	: '',
            'term'              : ''
            
        },
       	
        initialize: function () {
                    
        }
    });

    return FilterModel;
});

