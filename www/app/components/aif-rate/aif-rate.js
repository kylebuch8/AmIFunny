(function () {
    'use strict';

    /*global Polymer*/
    Polymer('aif-rate', {
        starting: 0,

        rating: 0,

        goBack: function () {
            this.fire('main');
        },

        submit: function () {
            alert(this.rating);
            this.fire('main');
        }
    });
}());
