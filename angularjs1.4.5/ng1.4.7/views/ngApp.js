var ngApp = angular.module('routerApp', ['ui.router']);

ngApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      '': {templateUrl: 'routing/home.html'},
      'columnLeft@home': {templateUrl: 'contents/data.txt'},
      'columnRight@home': {templateUrl: 'routing/table.html', controller: 'tableController'}
    }
  })
  .state('courses', {
    url: '/courses',
    templateUrl: 'routing/courses.html'
  })
  .state('courses.news', {
    url: '/news',
    templateUrl: 'routing/news.html',
    controller: function ($scope) {
      $scope.news = ['Ada Today', 'Code Time', 'Really news'];
    }
  })
  .state('courses.paragraph', {
    url: '/para',
    templateUrl: 'contents/data.txt'
  })
  .state('newsMore', {
    url: '/news/:newsName',
    controller: function ($scope, $stateParams) {
      $scope.name = $stateParams.newsName;
    },
    templateUrl: 'routing/newsMore.html'
  })

})

ngApp.controller('tableController', function ($scope) {
  $scope.myData = [
        {
            name: 'EOM#2',
            price: 2700
        },
        {
            name: 'Javascript',
            price: 1500
        },
        {
            name: 'Meteor',
            price: 3000
        }
    ];
})
