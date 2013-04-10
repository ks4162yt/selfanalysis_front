define(['backbone', 'router/router', 'view/viewApp'], 
    function(Backbone, Router, ViewApp) {

    'use strict';

    var app = {
        start: function() {
            console.log('==== app start ====');

            this.router = new Router();
            this.view = new ViewApp({
                el: $('#app')
            })

            var self = this;

            this.router.on('route:home', function() {
                self.view.setContentView('home');
            });

            Backbone.history.start();
        }
    };

    return app;
});