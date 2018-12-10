'use strict';

/**
 * @ngdoc function
 * @name pokeApiApp.controller:PruebaCtrl
 * @description
 * # PruebaCtrl
 * Controller of the pokeApiApp
 */
angular.module('pokeApiApp')
  .controller('PruebaCtrl', function ($scope, $http) {
    $scope.name = "Cristian";
    console.log($http.get('https://pokeapi.co/api/v2/pokemon/'));
  });
