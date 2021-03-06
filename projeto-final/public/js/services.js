'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  service('BeerService', ['$http',
    function($http) {
      var urlBase = 'api/beers';
      this.find = function() {
        return $http.get(urlBase);
      };

      this.findOne = function(id) {
        return $http.get(urlBase + '/' + id);
      };

      this.create = function(data) {
        return $http.post(urlBase, data);
      };

      this.update = function(data) {
        return $http.put(urlBase + '/' + data._id, data);
      };

      this.remove = function(data) {
        return $http.delete(urlBase + '/' + data._id, data);
      };
    }
  ]);
