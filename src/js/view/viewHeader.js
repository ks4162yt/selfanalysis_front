define(['backbone', 'text!template/header.html'],
    function(Backbone, template) {

    'use strict';

    var ViewHeader = Backbone.View.extend({
        initialize: function(options) {
            console.log('ViewHeader#initialize', options);
            this.el = options.el;

            this.render();
        },

        render: function() {
            this.el.html(template);
            return this;
        }
    });

    return ViewHeader;
});