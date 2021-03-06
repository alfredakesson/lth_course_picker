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
            this.render();
        },

        render : function () {
            var that = this;
            
            var toCol= this.collection.filter(function(s){
                isCorrectSpecialization = that.filter.get('inriktning_id') === s.get('inriktning_id');

                studyPeriods = s.get('lasperioder');
                isCorrectSP = false;
                _.each(studyPeriods, function (sp) {
                    if(that.filter.get('lasperioder')[sp-1])
                        isCorrectSP = true;
                });
                var isPeriod = that.filter.get('lasperioder')[4] && studyPeriods.length === 0;
                return isCorrectSpecialization && (isCorrectSP || isPeriod);
            });
            var that = this;
            this.$el.empty();
            _.each(toCol, function (course) {
                var view = new CourseItemView({
                    model : course,
                    filter : that.filter
                });
                that.$el.append(view.el);
            });
            this.rentderTitle(that.filter.get('inriktning_id'));
        },
        
        rentderTitle : function(cool) {
            var specArray = _.zip(
                this.collection.getAllSpecializationNameId(),
                this.collection.getAllSpecializationName()
            );
            var fullname = _.find(specArray, function(a) { return a[0] === cool; });
            if (fullname)
                $("#courseType").text(fullname[1]);
        },

    });

    return CourseListView;

});
