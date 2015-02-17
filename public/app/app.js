var app = angular.module('app', ['ngResource', 'ngRoute']);

app.controller('mainCtrl',function($scope){
    $scope.test = "Hello Angular";
});

app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{templateUrl: '/partials/main',controller: 'mainCtrl'});
    $locationProvider.html5Mode(true);
    /*$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
}]);
