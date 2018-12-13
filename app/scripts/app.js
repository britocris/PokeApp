'use strict';

/**
 * @ngdoc overview
 * @name pokeApiApp
 * @description
 * # pokeApiApp
 *
 * Main module of the application.
 */
angular
  .module('pokeApiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/prueba', {
        templateUrl: 'views/prueba.html',
        controller: 'PruebaCtrl',
        controllerAs: 'prueba'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
