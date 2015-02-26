'use strict';

var appDependencies = [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
];

angular
    .module('tvGuideApp', appDependencies)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
