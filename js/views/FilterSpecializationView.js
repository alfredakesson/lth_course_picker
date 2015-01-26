define([
  'jquery',
  'underscore',
  'backbone',
  'views/FilterSpecItemView',
  'views/FilterStudyPeriodItemView',
  'text!templates/FilterTemplate.html'
], function ( $, _, Backbone, FilterSpecItemView,FilterStudyPeriodItemView, temp ) { 

    FilterSpecializationView = Backbone.View.extend({
        el : '#filterDetails',
        
        initialize : function (args) {
            console.log('filterSpecializationView init');
            this.filter = args.filter;
            console.log("test");   
            this.template = _.template(temp);
            this.listenTo(this.collection, 'reset', this.render);
        },

        render : function () {
            var specArray = _.zip(
                this.collection.getAllSpecializationNameId(),
                this.collection.getAllSpecializationName()
            );
            var that = this;
            this.$el.empty();
            _.each(specArray, function (special) {
                var view = new FilterSpecItemView({
                    spec_fullName   : special[1],
                    spec            : special[0],
                    col             : that.collection,
                    filter          : that.filter,
                });

                that.$el.append(view.el);
            })
        },
    

        getSpecializations : function() {
            var specArray = this.collection.getAllSpecializationNameId()
            var startString = "Inriktning: ";
            return _.reduce(specArray, function(acc, spec) { 
                return acc + " " + spec + " "; 
            }, startString);
        }

    });

    return FilterSpecializationView;

});