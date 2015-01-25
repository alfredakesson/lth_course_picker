define([
  'jquery',
  'underscore',
  'backbone',
  'views/FilterSpecItemView'
], function ( $, _, Backbone ) { 

    FilterView = Backbone.View.extend({
        el : '#filterDetails',
        
        initialize : function (args) {
            console.log('filterView init');
            this.filter = args.filter;
            this.CL = args.CL;
            this.template = _.template($('#filterTemplate').html());
            
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
                    CL              : that.CL
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

    return FilterView;

});

/*

        el: '.filter',
        template: 'filter',
        events: {
            'click a.study_period': 'clicked_sp',
            'click a.specialization': 'clicked_spec'
        },

        dataSource: courses,

        render: function () {
            spec_list = _.uniq(courses.pluck('specialization'), false, function(item) {
                return item[0];
            });

            var template = _.template($('#filter').html());
            this.$el.html(template({
                data: spec_list,
            }));
            
        },
        
  
        chosen_sp: [1,2,3,4],
        toggle_study_period: function(sp){

            if(_.indexOf(this.chosen_sp, sp) != -1) {
                this.chosen_sp = _.without(this.chosen_sp, sp);
            }
            else
                this.chosen_sp.push(sp);
        },
  
        
        clicked_sp: function (e) {
            e.preventDefault();
            this.toggle_study_period($(e.currentTarget).data("sp"));
            homeView.filter_sp(this.chosen_sp);         
        },


        clicked_spec: function (e) {
            e.preventDefault();
            if(this.chosen_sp.length == 0) 
                alert("you must select at least one study period")
                            
            //console.log('clicked on filter specialization: ' + $(e.currentTarget).data("spec")); 
            homeView.filter_spec(this.chosen_sp, $(e.currentTarget).data("spec"));
        },



    });
*/