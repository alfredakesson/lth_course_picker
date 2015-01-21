define([
  'jquery',
  'underscore',
  'backbone',
  'views/ChosenCourseItemView'
], function ( $, _, Backbone, ChosenCourseItemView ) { 

    StudyPeriodView = Backbone.View.extend({

        initialize : function (args) {
            this.viewSp = args.sp;
            this.setElement('#timeTableSp' + args.sp);
            this.render();

        },

        render : function () {
            this.$el.empty();
            this.collection.each(function (course) {

                var viewSp = this.viewSp;
                var studyPeriods = course.get('study_periods');                
                var belongsToSp = _.find(studyPeriods, function (sp) { 
                    return sp == viewSp; 
                });

                if(belongsToSp) {
                    var view = new ChosenCourseItemView({
                        model : course,
                    });
                    this.$el.append(view.el);
                }

            }, this);
            
        },

    });

    return StudyPeriodView;
});