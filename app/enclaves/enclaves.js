'use strict';

angular.module('myApp.enclaves', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/enclaves', {
    templateUrl: 'enclaves/enclaves.html',
    controller: 'EnclavesCtrl'
  });
}])

.controller('EnclavesCtrl', ['$scope', '$firebaseArray', function($scope,$firebaseArray) {
  console.log("Controller loaded...");

}]);