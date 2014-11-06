(function () {
    'use strict';

    /*global Polymer*/
    Polymer('aif-rate', {
        starting: 0,

        rating: 0,

        ready: function () {
            this.addEventListener('reset', function () {
                this.starting = 0;
                this.rating = 0;
            });
        },

        goBack: function () {
            this.fire('main');
        },

        submit: function () {
            this.fire('main', {
                type: 'rate'
            });
        }
    });
}());
