(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state({
                name: 'app',
                abstract: true,
                component: 'app'
            })
            .state({
                name: 'home',
                parent: 'app',
                url: '/',
                component: 'home'
            })
            .state({
              name: 'editAd',
              parent: 'app',
              url: '/edit',
              component: 'edit',
              params: {
                selectedPost: {}
              }
            })
            .state({
              name: 'createAd',
              parent: 'app',
              url: '/new',
              component: 'new'
            });
    }

}());
