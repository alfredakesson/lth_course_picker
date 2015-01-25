require.config({
  baseUrl : 'js/',
  // load the main file
  deps : [ 'main' ],

  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim : {
    'underscore' : {
      exports : '_'
    },
    'backbone' : {
      deps : [ 'underscore', 'jquery' ],
      exports : 'Backbone'
    }
  },

  paths : {
    'jquery'        : 'lib/jquery.min',
    'underscore'    : 'lib/underscore-min',
    'backbone'      : 'lib/backbone-min',
    'localstorage'  : 'lib/backbone.localStorage',
    'text'          : 'lib/text'
  }
});
