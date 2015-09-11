'use strict';

angular.module('angularApp.expression', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/expression', {
    templateUrl: 'expression/expression.jade',
    controller: 'expressionCtrl'
  });
}])

.controller('expressionCtrl', [function() {

}]);
