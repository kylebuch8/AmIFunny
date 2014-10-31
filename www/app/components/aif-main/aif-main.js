(function () {
    'use strict';

    /*global Polymer*/
    Polymer('aif-main', {
        people: [
            {
                name: 'Name 1'
            },
            {
                name: 'Name 2'
            },
            {
                name: 'Name 3'
            },
            {
                name: 'Name 4'
            },
            {
                name: 'Name 5'
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
