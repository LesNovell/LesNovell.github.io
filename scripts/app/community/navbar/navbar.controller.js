'use strict';

angular.module('ranchoApp')
    .controller('CommunityNavbarController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
    });
