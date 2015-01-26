define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/DetailTemplate.html'
], function ( $, _, Backbone,temp) { 

    TimeTableDetailView = Backbone.View.extend({

        el : '#timeTableDetails',
        
        initialize : function () {
            console.log('detailView init');
            this.template = _.template(temp);
            this.listenTo(this.collection, 'add', this.onEvent);
            this.listenTo(this.collection, 'destroy', this.onEvent);
        },

        onEvent : function () {
            this.render();
        },


        render : function () {
            this.$el.empty();
            this.$el.html(this.template({
                totalCredit: this.collection.totalCredits(),
                advancedCredit: this.collection.totalAdvanceCredits(),
                specCredits: this.specCredits(),
                studyPeriodCredits: this.studyPeriodCredits()
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

        studyPeriodCredits : function () {
            var list = this.collection.studyPeriodCredits();
            var result = "Valda poäng inom respektive läsperiod: ";
            return result + list;
        }

    });

    return TimeTableDetailView;
});