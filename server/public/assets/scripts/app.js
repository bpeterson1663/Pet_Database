
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: '/views/routes/home.html',
            controller: "ShowController"
        }).
        when('/add', {
            templateUrl: '/views/routes/add.html',
            controller: 'AddController'
        }).
        when('/list', {
            templateUrl: '/views/routes/list.html',
            controller: 'ShowController'
        }).
        otherwise({
            redirectTo: 'home'
        });
} ]);
