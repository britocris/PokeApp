'use strict';

/**
 * @ngdoc function
 * @name pokeApiApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the pokeApiApp
 */
angular.module('pokeApiApp')
  .controller('DetailsCtrl', function ($http, $scope, $routeParams, $q) {
    var id = $routeParams.id

    var Pokemons = {
      get: function (_url) {
        var _defered = $q.defer();
        var promise = _defered.promise;
        $http.get(_url)
          .then(function successCallback(data){
            _defered.resolve(data); 
          }, function errorCallback(err){
            _defered.reject(err)
          })
        return promise;
      },
    }

    var url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
    Pokemons.get(url).then(function(response){
      var name = response.data.forms[0].name
      var height = response.data.height
      var weight = response.data.weight
      var speed = response.data.stats[0].base_stat
      var special_defense = response.data.stats[1].base_stat
      var special_attack = response.data.stats[2].base_stat
      var defense = response.data.stats[3].base_stat
      var attack = response.data.stats[4].base_stat
      var hp = response.data.stats[5].base_stat
      var img = response.data.sprites.front_default

      $scope.name = name
      $scope.height = height
      $scope.weight = weight
      $scope.speed = speed
      $scope.special_defense = special_defense
      $scope.special_attack = special_attack
      $scope.defense = defense
      $scope.attack = attack
      $scope.hp = hp
      $scope.img = img
      
    }, function(error){
      console.log(error)
    })

  });
