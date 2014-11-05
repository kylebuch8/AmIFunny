(function () {
    'use strict';

    /*global Polymer*/
    Polymer('aif-app', {
        //selected: (localStorage.getItem('access_token')) ? 'main' : 'login',
        selected: 'main',

        ready: function () {
            this.addEventListener('logged-in', function () {
                this.selected = 'main';
            });
        },

        eventDelegates: {
            'main': 'showMain',
            'rate': 'showRate',
            'profile': 'showProfile',
            'search': 'showSearch'
        },

        showMain: function () {
            this.selected = 'main';
        },

        showRate: function () {
            this.selected = 'rate';
        },

        showProfile: function () {
            this.selected = 'profile';
        },

        showSearch: function () {
            this.selected = 'search';
        },

        setupView: function () {
            if (this.selected === 'profile') {
                this.querySelector('::shadow aif-profile').fire('setHeaderHeight');
            }
        }
    });
}());
