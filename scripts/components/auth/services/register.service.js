'use strict';

angular.module('ranchoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


