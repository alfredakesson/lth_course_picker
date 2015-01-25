define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone) { 

    FilterSpecItemView = Backbone.View.extend({

        tagName : 'li',
        className : 'filterSpecItem',

        events : {
            'click' : 'onclick',
        },

        onclick : function () {
            console.log('click! '+this.spec);
            this.filter.set("specialization",this.spec);
            this.CL.render();
            //console.log(this.filter);
            //this.col.filter(function(s){return that.spec === s.attributes.specialization[0];});
        },

        initialize : function (args) {
            this.spec = args.spec;
            this.col = args.col;
            this.filter = args.filter;
            this.CL = args.CL;
            this.template = _.template($('#filterSpecItemTemplate').html());
            this.render();

        },

        render : function () {
            console.log(this.model);
            this.$el.html(this.template({
                'spec' : this.spec
            }));
        }

    });

    return FilterSpecItemView;

});