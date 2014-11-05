(function () {
    'use strict';

    Polymer('aif-profile', {
        ready: function () {
            this.addEventListener('setHeaderHeight', function () {
                this.$.headerPanel.measureHeaderHeight();
            });
        },

        goBack: function () {
            this.fire('main');
        },

        personChanged: function(oldValue, newValue) {
            this.$.headerPanel.querySelector('::shadow #headerBg').style.backgroundImage = 'url(' + newValue.profilePic + ')';
        }
    });
}());
