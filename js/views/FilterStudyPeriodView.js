define([
  'jquery',
  'underscore',
  'backbone',
  'views/FilterSpecItemView',
  'views/FilterStudyPeriodItemView',
  'text!templates/StudyPeriodViewTemplate.html'
], function ( $, _, Backbone, FilterSpecItemView, FilterStudyPeriodItemView ,temp) { 

    FilterView = Backbone.View.extend({
        el : '#filterStudyPeriod',
        
        initialize : function (args) {
            this.filter = args.filter;
            this.template = _.template(temp);
            this.render();
            this.listenTo(this.filter, 'toggleAll', this.render);
        },

        render : function () {
            this.$el.empty();

            var view = new FilterStudyPeriodItemView({
                'studyPeriod' : '1',
                'filter'      : this.filter
            });
            this.$el.append(view.el);

            var view = new FilterStudyPeriodItemView({
                'studyPeriod' : '2',
                'filter'      : this.filter
            });
            this.$el.append(view.el);

            var view = new FilterStudyPeriodItemView({
                'studyPeriod' : '3',
                'filter'      : this.filter
            });
            this.$el.append(view.el);

            var view = new FilterStudyPeriodItemView({
                'studyPeriod' : '4',
                'filter'      : this.filter
            });
            this.$el.append(view.el);
            
            var view = new FilterStudyPeriodItemView({
                'studyPeriod' : 'Saknar läsperiod',
                'filter'      : this.filter
            });
            this.$el.append(view.el);

            var view = new FilterStudyPeriodItemView({
                'studyPeriod' : 'Alla',
                'filter'      : this.filter
            });
            
            this.$el.append(view.el);

            
        },

    });

    return FilterView;

});