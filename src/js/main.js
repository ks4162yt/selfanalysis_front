requirejs.config({

    baseUrl: './js/',

    paths: {
        // Alias
        template: '../template',

        // Libraries
        jquery: 'libs/jquery/jquery-1.9.1',
        underscore: 'libs/underscore/underscore-1.4.4',
        backbone: 'libs/backbone/backbone-1.0.0',
        text: 'libs/require/text-2.0.5',
        matrix: 'libs/matrix/simple-matrix-0.1.0'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['app'], function(app) {
    app.start();
});