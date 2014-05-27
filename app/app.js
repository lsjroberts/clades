var app = angular.module('cladesApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // $urlRouterProvider.otherwise('');

    $stateProvider
        .state('index', {
            url: '',
            templateUrl: 'app/views/welcome/index.html',
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/welcome/about.html',
        })
        .state('taxons', {
            url: '/taxons',
            templateUrl: 'app/views/taxons/index.html',
            controller: 'TaxonsController',
        })
            .state('taxons.show', {
                url: '/{id}',
                templateUrl: 'app/views/taxons/show.html',
                controller: 'TaxonsShowController',
            })
    ;

    // $locationProvider.html5Mode(true);
});