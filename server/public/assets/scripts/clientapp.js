var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'md.data.table']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController"
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController"
    })
    .when('/student', {
      templateUrl: '/views/student.html',
      controller: "UserController"
    })
    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: "UserController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);