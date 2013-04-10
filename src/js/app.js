define(['backbone', 'router/router', 'view/viewFactory'], 
    function(Backbone, Router, viewFactory) {

    'use strict';

    var app = {
        el: $('#app'),

        start: function() {
            console.log('==== app start ====');

            this.router = new Router();

            this.headerView = viewFactory.getView({
                el: this.el.find('.headerCtnr'),
                viewId: 'header'
            });

            var self = this;
            this.router.on('route:home', function() {
                self.contentView = viewFactory.getView({
                    el: self.el.find('.contentCtnr'),
                    viewId: 'home'
                });
            });

            Backbone.history.start();
        }
    };

    return app;
});