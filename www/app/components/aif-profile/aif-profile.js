(function () {
    'use strict';

    Polymer('aif-profile', {
        ready: function () {
            this.addEventListener('setHeaderHeight', function () {
                this.$.chart.fire('draw');
            });
        },

        scrollHandler: function (event) {
            var bottom = 200,
                scrollTop = event.detail.target.scrollTop;

            this.$.toolbar.style.backgroundColor = 'rgba(0, 150, 136,' + scrollTop / bottom + ')';
        },

        goBack: function () {
            this.fire('main');
        }
    });
}());
