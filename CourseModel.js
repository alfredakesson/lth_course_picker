CoursePicker.Models.CourseModel = Backbone.Model.extend({

	
	defaults : {
		
		'id'				: '',
        'code'				: '',
        'name'				: '',
        'credits'			: '',
        'cycle'				: '',
        'specialization'	: [],
        'on_hold'			: '0',
        'study_periods'		: [],

    },
   	
    
    initialize: function () {
                
    },
    

});