// តឥបិេស឵ន េស េសត ៚
// ន មេា ពុ ទា យ សិ ទំ ៚
// េអដាេឃា. ៃអេអា ៚

//Create the Module name
var ngApp = angular.module('ngApp', ['ngRoute', 'ngAnimate']);

//Config our routes
ngApp.config(function($routeProvider) {
    $routeProvider
    //route for ngView1
    .when('/', {
      templateUrl : '/route/ngView1/ngView1.html',
      controller  : 'contentController'
    })
    //route for ngView2
    .when('/ngView2', {
      templateUrl : '/route/ngView2/ngView2.html',
      controller  : 'ngView2Controller'
    })
    //route for ngView3
    .when('/ngView3', {
      templateUrl : '/route/ngView3/ngView3.html',
      controller  : 'ngView3Controller'
    });
});

// ngApp.animation('.slide', [function() {
//   return {
//
// }])



//Controller
ngApp.controller('contentController', function($scope) {
    $scope.message = 'Welcome everyone to EOM#1 Class';
    $scope.animateClass = 'ngView1';
    $scope.adjClass = 'adj-ng1';

});

ngApp.controller('ngView2Controller', function($scope) {
    $scope.message = 'Look at me I\'m ngView2!!!';
    $scope.animateClass = 'ngView2';
    $scope.adjClass = 'adj-ng2';
});

ngApp.controller('ngView3Controller', function($scope) {
    $scope.message = 'Look at me I\'m definetely ngView3!!!';
    $scope.animateClass = 'ngView3';
    $scope.adjClass = 'adj-ng3';
});

ngApp.controller('navbarController', function($scope, $location) {
    $scope.isActive = function(myLocation) {
        return (myLocation === $location.path());
    }
});
