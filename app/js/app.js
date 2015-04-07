  'use strict';

  angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
  ]).

  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
                        templateUrl: 'partials/home.html', 
                        controller: 'HomeCtrl'
                       });
    $routeProvider.when('/page1', {
                        templateUrl: 'partials/page1.html', 
                        controller: 'HomeCtrl'
                       });
    $routeProvider.when('/page2', {
                        templateUrl: 'partials/page2.html', 
                        controller: 'HomeCtrl'
                       });
    $routeProvider.when('/page3', {
                        templateUrl: 'partials/page3.html', 
                        controller: 'HomeCtrl'
                       });
    $routeProvider.when('/page4', {
                        templateUrl: 'partials/page4.html', 
                        controller: 'HomeCtrl'
                       });


    $routeProvider.otherwise({redirectTo: '/index'});
  }]); 


