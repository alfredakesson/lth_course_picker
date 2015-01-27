define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.localStorage'
  ], function ( $, _, Backbone ) { 

    FilterModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('Filter'),
        
        defaults: {
            'id'            : 666, /* Model must have a unique id to be saved in local storage */
            'lasperioder'   : [true,true,true,true],
            'inriktning_id' : 'none'
        },

        getToggle : function(studyPeriod){
            return  this.get('lasperioder')[studyPeriod-1];
        },


        initialize: function () {
            this.trigger('change');
        },

        resetStudyPeriod : function () {
            this.set('lasperioder', [true, true, true, true]);
            this.trigger('change');
            this.save();
        },
        
        toggleStudyPeriod : function (sp) {
            this.get('lasperioder')[sp-1] = !this.get('lasperioder')[sp-1];
            this.trigger('change');
            this.save();
        },

        setSpecialization : function (spec) {
            this.set('inriktning_id', spec);
            this.trigger('change');
            this.save();
        },

        addStudyYear  : function () {
            console.log('hej add studyyear i filter');
        }
      
    });

    return FilterModel;
});

