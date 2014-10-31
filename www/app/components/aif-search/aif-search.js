(function () {
    'use strict';

    /*global Polymer*/
    Polymer('aif-search', {
        goBack: function () {
            this.fire('main');
        }
    });
}());
