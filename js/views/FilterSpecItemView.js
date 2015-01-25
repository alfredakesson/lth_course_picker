define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    FilterSpecItemView = Backbone.View.extend({

        tagName : 'li',
        className : 'filterSpecItem',

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            console.log('click on specialization: ' + this.spec);
            this.filter.set("inriktning_id", this.spec);
            this.CL.render();
        },

        initialize : function (args) {
            this.specFullName = args.spec_fullName;
            this.spec = args.spec;
            this.col = args.col;
            this.filter = args.filter;
            this.CL = args.CL;
            this.template = _.template($('#filterSpecItemTemplate').html());
            this.render();

        },

        render : function () {
            this.$el.html(this.template({
                'spec' : this.spec,
                'specFullName' : this.specFullName
            }));
        }

    });

    return FilterSpecItemView;

});