define(['backbone', 'text!template/home.html'],
    function(Backbone, template) {

    'use strict';

    var ViewHome = Backbone.View.extend({
        initialize: function(options) {
            console.log('ViewHome#initialize', options);
            this.el = options.el;

            this.render();
        },

        render: function() {
            this.el.html(template);
            return this;
        }
    });

    return ViewHome;
});