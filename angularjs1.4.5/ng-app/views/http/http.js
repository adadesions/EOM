angular
.module('adaApp', [])
.controller('httpCtrl', function($scope, $http) {
    $http.get('http://localhost:3000')
    .success(function(res) {
        $scope.data = res.records
    });

});
