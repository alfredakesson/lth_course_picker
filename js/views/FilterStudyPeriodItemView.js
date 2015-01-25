define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    FilterStudyPeriodItemView = Backbone.View.extend({

        tagName : 'li',
        className : 'filterStudyPeriodItem',

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            console.log('click on studyPeriodFilter!');
            if (this.studyPeriod === 'Alla') {
                this.filter.resetStudyPeriod();
            }
            else {
                this.filter.toggleStudyPeriod(this.studyPeriod);
            }
        },

        initialize : function (args) {
            this.studyPeriod = args.studyPeriod;
            this.filter = args.filter;
            this.template = _.template($('#filterSPItemTemplate').html());
            console.log("CREATED LP VIEW!");
            this.render();
        },

        render : function () {
            this.$el.html(this.template({
                'studyPeriod' : this.studyPeriod
            }));
        }

    });

    return FilterStudyPeriodItemView;

});