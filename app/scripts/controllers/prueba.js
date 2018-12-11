'use strict';

/**
 * @ngdoc function
 * @name pokeApiApp.controller:PruebaCtrl
 * @description
 * # PruebaCtrl
 * Controller of the pokeApiApp
 */

angular.module('pokeApiApp')
  .controller('PruebaCtrl', function ($scope, $http, $q) {

    var _url = 'https://pokeapi.co/api/v2/pokemon-form/';
    /* var promise = $http.get(urlBase)
    console.log(promise) */

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

    $scope.objeto = [];

    var lista = function(){
      Pokemons.get(_url).then(function(response1){
        console.log(response1.data.results.length)
        /* var i = response1.data.results.length; */ // i maneja la cantidad exacta de todos los Pokemons
        for( var j = 0; j < 20; j++){                // Para este ejemplo utilizo 20 para que no demore tanto
          var url = response1.data.results[j].url;
          Pokemons.get(url).then(function(response){
            $scope.objeto.push({ 
            "name": response.data.name,
            "id"  : response.data.id,
            "img" : response.data.sprites.front_default
            });
          }, function(error){
            console.log(error)
          })
        }
      }, function(error){
        console.log(error)
      })
    }

    lista();
    
      
  
  });

  