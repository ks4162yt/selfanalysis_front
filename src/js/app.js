define(['backbone', 'router/router', 'view/viewApp'], 
    function(Backbone, Router, ViewApp) {

    'use strict';

    var app = {
        start: function() {
            console.log('==== app start ====');

            this.router = new Router();
            this.view = new ViewApp();

            Backbone.history.start();
        }
    };

    return app;
});