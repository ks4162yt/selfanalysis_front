define(['backbone'], function(Backbone) {

    'use strict';

    var ViewApp = Backbone.View.extend({
        initialize: function() {
            console.log('ViewApp#initialize');
        }
    });

    return ViewApp;
});