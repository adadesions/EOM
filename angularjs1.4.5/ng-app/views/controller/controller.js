angular
.module('controllerApp', [])
.controller('showcaseCtrl', function($scope) {
  $scope.data = [
      {name:'Ada', likes: 4000},
      {name:'Code', likes: 512},
      {name:'Angular', likes: 1000},
      {name:'NodeJS', likes: 2000},
  ];
//
  $scope.addData = function() {
      if($scope.likes == null) $scope.likes = 0;
      $scope.data.push({name:$scope.name, likes:$scope.likes})
      $scope.name = ''
      $scope.likes = 0
  };
//
  $scope.upLike = function(obj) {
      obj.likes += 1;
  };
//
  $scope.delete = function(obj) {
      var index = $scope.data.indexOf(obj);
      $scope.data.splice(index,1);
  };

});
