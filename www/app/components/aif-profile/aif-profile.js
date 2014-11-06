(function () {
    'use strict';

    Polymer('aif-profile', {
        ready: function () {
            this.addEventListener('setHeaderHeight', function () {
                this.$.headerPanel.measureHeaderHeight();
                this.$.headerPanel.shadowRoot.querySelector('#headerBg').style.backgroundImage = 'url(' + this.person.profilePic + ')';
            });
        },

        goBack: function () {
            this.fire('main');
        }
    });
}());
