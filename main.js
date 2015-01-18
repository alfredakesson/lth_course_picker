
CoursePicker = {
    Models : { },
    Collections : { },
    Views : { },
    Routers : { },
    init : function() {
        console.log('Namespaces declared...');
        new CoursePicker.Routers.ApplicationRouter();
        Backbone.history.start();
    }
};

$(document).ready(function() {
    CoursePicker.init();
});