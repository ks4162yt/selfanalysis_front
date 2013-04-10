define(['view/viewHome'],
    function(ViewHome) {

    'use strict';

    var contentViewFactory = {
        initialize: function(options) {
            this.rootEl = options.rootEl;
        },

        getView: function(viewId) {
            if (viewId === 'home') {
                return new ViewHome({
                    el: this.rootEl
                });
            }
        }
    };

    return contentViewFactory;
});