'use strict';

angular.module('ranchoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    }
                }
                //,
                //resolve: {
                //    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                //        $translatePartialLoader.addPart('main');
                //        return $translate.refresh();
                //    }]
                //}
            })
            .state('donate', {
                parent: 'site',
                url: '/donate',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/donate/donate.html',
                        controller: 'DonateController'
                    }
                }
                //,
                //resolve: {
                //    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                //        $translatePartialLoader.addPart('main');
                //        return $translate.refresh();
                //    }]
                //}
            })
            .state('research', {
                parent: 'site',
                url: '/research',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/research/research.html',
                        controller: 'ResearchController'
                    },
                    'subnavbar@': {
                        templateUrl: 'scripts/app/research/navbar/navbar.html',
                        controller: 'ResearchNavbarController'
                    }

                }
                //,
                //resolve: {
                //    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                //        $translatePartialLoader.addPart('main');
                //        return $translate.refresh();
                //    }]
                //}
            })
            .state('community', {
                parent: 'site',
                url: '/community',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/community/community.html',
                        controller: 'CommunityController'
                    },
                    'subnavbar@': {
                        templateUrl: 'scripts/app/community/navbar/navbar.html',
                        controller: 'CommunityNavbarController'
                    }
                }
                //,
                //resolve: {
                //    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                //        $translatePartialLoader.addPart('main');
                //        return $translate.refresh();
                //    }]
                //}
            })
        ;
    });
