angular
.module('adaApp', [])
.controller('httpCtrl', function($scope, $http) {
    $http.get('http://www.w3schools.com/angular/customers.php')
    .success(function(res) {
        $scope.data = res.records
    });

});
