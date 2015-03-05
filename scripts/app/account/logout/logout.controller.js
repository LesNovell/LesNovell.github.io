'use strict';

angular.module('ranchoApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
