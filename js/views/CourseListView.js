define([
  'jquery',
  'underscore',
  'backbone',
  'views/CourseItemView'
], function ( $, _, Backbone, CourseItemView) { 

    CourseListView = Backbone.View.extend({
        
        el: '#courseList',

        initialize: function(args) {
            this.filter = args.filter;
            this.listenToOnce(this.collection, 'reset', this.render);
            this.listenTo(this.filter, 'change', this.filterHasChanged);
        },

        filterHasChanged : function () {
            console.log('filter has changed!');
            this.render();
        },

        render : function () {
            var that = this;
            var toCol= this.collection.filter(function(s){
                isCorrectSpecialization = that.filter.inriktning_id === s.get('inriktning_id');

                if(s.get('inriktning_id') == 'exjobb') {
                    console.log("FOUND!");
                    console.log();
                }

                studyPeriods = s.get('lasperioder');
                isCorrectSP = false;
                _.each(studyPeriods, function (sp) {
                    if(that.filter.lasperioder[sp-1])
                        isCorrectSP = true;
                });
                return isCorrectSpecialization && isCorrectSP;
            });
            var that = this;
            this.$el.empty();
            _.each(toCol, function (course) {
                var view = new CourseItemView({
                    model : course
                });
                that.$el.append(view.el);
            });
        },

    });

    return CourseListView;

});
