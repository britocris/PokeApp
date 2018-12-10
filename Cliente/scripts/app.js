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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/pagina.html',
        controller: 'controlador',
        controllerAs: 'controlador'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
