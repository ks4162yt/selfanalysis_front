define(['view/viewHeader', 'view/viewHome'],
    function(ViewHeader, ViewHome) {

    'use strict';

    var viewFactory = {
        getView: function(args) {
            // TODO: リファクタする
            var rootEl = args.el;
            var viewId = args.viewId;
            if (viewId === 'home') {
                return new ViewHome({
                    el: rootEl
                });
            } else if (viewId === 'header') {
                return new ViewHeader({
                    el: rootEl
                });
            }
        }
    };

    return viewFactory;
});