angular
.module('adaApp', [])
.controller('httpCtrl', function($scope, $http) {
    $http.get('http://localhost:3000/http/dataTest.json')
    .success(function(res) {
        $scope.data = res.records
    });

});
