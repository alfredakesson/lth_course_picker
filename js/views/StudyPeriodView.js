define([
  'jquery',
  'underscore',
  'backbone',
  'views/ChosenCourseItemView'
], function ( $, _, Backbone, ChosenCourseItemView ) { 

    StudyPeriodView = Backbone.View.extend({

        initialize : function (args) {
            this.viewSp = args.sp;
            this.studyYear = args.studyYear;            
            console.log('init StudyPeriodView ' + '#timeTableSp' + args.sp);

            this.render();
        },

        render : function () {
            this.$el.empty();
            this.collection.each(function (course) {

                var viewSp = this.viewSp;
                var studyPeriods = course.get('lasperioder');                
                var belongsToSp = _.find(studyPeriods, function (sp) { 
                    return sp == viewSp;
                });
                if(studyPeriods.length === 0 && viewSp == 5){
                    //console.log("Go inside");
                    belongsToSp = true;
                }
                
                var courseStudyYear = course.get('studyYear');   
                console.log('viktikg koll study year is: ' + courseStudyYear);
                var belongsToStudyYear = courseStudyYear === this.studyYear;

                if(belongsToSp && belongsToStudyYear) {        
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