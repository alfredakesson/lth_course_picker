define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/FilterSPItemTemplate.html'
], function ( $, _, Backbone,temp ) { 

    FilterStudyPeriodItemView = Backbone.View.extend({

        tagName : 'li',
        className : 'filterStudyPeriodItem',

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            if (this.studyPeriod === 'Alla') {
                this.filter.resetStudyPeriod();
            }
            else {
                this.filter.toggleStudyPeriod(this.studyPeriod);
            }
            this.filter.trigger('toggleAll');
        },

        initialize : function (args) {
            this.studyPeriod = args.studyPeriod;
            this.filter = args.filter;
            this.template = _.template(temp);
            this.render();
        },

        render : function () {
            this.$el.html(this.template({
                'studyPeriod' : this.studyPeriod,
                'toggle' : this.filter.getToggle(this.studyPeriod)
            }));
        }

    });

    return FilterStudyPeriodItemView;

});