define(['backbone', 'view/viewHome'],
    function(Backbone, ViewHome) {

    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home'
        }
    });

    return Router;
});