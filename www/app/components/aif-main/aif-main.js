(function () {
    'use strict';

    /*global Polymer*/
    Polymer('aif-main', {
        people: [
            {
                name: 'Kyle Buchanan',
                profilePic: 'https://lh5.googleusercontent.com/-1zEfFKV5gKs/AAAAAAAAAAI/AAAAAAAAAAA/mCgpiWGqnB8/s400-c/photo.jpg'
            },
            {
                name: 'Kristy Buchanan',
                profilePic: 'https://lh5.googleusercontent.com/-x7z_-JzOPGY/AAAAAAAAAAI/AAAAAAAAiKs/SbHWJpwy8dQ/s400-c/photo.jpg'
            },
            {
                name: 'James Tysinger',
                profilePic: 'https://lh5.googleusercontent.com/-azBXZ_uiRKM/AAAAAAAAAAI/AAAAAAAAADg/6YSas88Q93U/s400-c/photo.jpg'
            },
            {
                name: 'Pat Dungan',
                profilePic: 'https://lh5.googleusercontent.com/-447WhzYP-xg/AAAAAAAAAAI/AAAAAAAA9C0/apc_GIZTl98/s400-c/photo.jpg'
            },
            {
                name: 'Luke Dary',
                profilePic: 'https://lh6.googleusercontent.com/-BjpLFp78GGg/AAAAAAAAAAI/AAAAAAAAYjw/26QXmHETJmU/s400-c/photo.jpg'
            },
            {
                name: 'Michael Roberto',
                profilePic: 'https://lh6.googleusercontent.com/-VejIBdLSe4E/AAAAAAAAAAI/AAAAAAAADOY/fIdskbsYhk0/s400-c/photo.jpg'
            },
            {
                name: 'Bill Rowland',
                profilePic: 'https://lh5.googleusercontent.com/-0i8nM4qfO7o/AAAAAAAAAAI/AAAAAAAAMMc/aMC1qhlJIQ0/s400-c/photo.jpg'
            }
        ],

        selectPerson: function (event) {
            this.person = event.target.templateInstance.model.person;
            this.fire('profile');
        },

        goToRate: function (event) {
            this.person = event.target.templateInstance.model.person;
            this.fire('rate');
        },

        goToSearch: function () {
            this.fire('search');
        }
    });
}());
