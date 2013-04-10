define(['jquery', 'backbone', 'view/viewHeader', 'view/contentViewFactory'],
    function($, Backbone, ViewHeader, contentViewFactory) {

    'use strict';

    var ViewApp = Backbone.View.extend({
        initialize: function(options) {
            console.log('ViewApp#initialize', options);
            this.el = options.el;

            contentViewFactory.initialize({
                rootEl: $('.contentCtnr')
            });
            this.createChildren();
        },

        createChildren: function() {
            this.header = new ViewHeader({
                el: this.el.find('.headerCtnr')
            });
        },

        setContentView: function(viewId) {
            this.contentView = contentViewFactory.getView(viewId);
        }
    });

    return ViewApp;
});