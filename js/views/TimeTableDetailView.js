define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) { 

    TimeTableDetailView = Backbone.View.extend({

        el : '#timeTableDetails',
        
        initialize : function () {
            console.log('detailView init');
            this.template = _.template($('#detailTemplate').html());
            this.listenTo(this.collection, 'add', this.onAdd);
        },

        onAdd : function () {
            this.render();
            this.collection.eachSpecCredits();
        },

        render : function () {
            this.$el.empty();
            this.$el.html(this.template({
                totalCredit: this.collection.totalCredits(),
                advancedCredit: this.collection.totalAdvanceCredits(),
                specCredits: this.specCredits()
            }));
        },

        specCredits : function () {
            var list = this.collection.eachSpecCredits();
            var result = "";

            var temp = _.each(list, function (triple) {
                result += triple[0] + ": " + triple[2] + " hp</br>";
            });
            return result;
        },

    });

    return TimeTableDetailView;
});