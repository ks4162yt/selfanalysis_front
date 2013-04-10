define(['view/viewHeader', 'view/viewHome'],
    function(ViewHeader, ViewHome) {

    'use strict';

    var viewFactory = {
        cache: {},

        getView: function(args) {
            // TODO: リファクタする
            var rootEl = args.el;
            var viewId = args.viewId;

            if (viewId in this.cache) {
                return this.cache[viewId];
            }

            if (viewId === 'home') {
                this.cache[viewId] = new ViewHome({
                    el: rootEl
                });
            } else if (viewId === 'header') {
                this.cache[viewId] = new ViewHeader({
                    el: rootEl
                });
            }

            return this.cache[viewId];
        }
    };

    return viewFactory;
});