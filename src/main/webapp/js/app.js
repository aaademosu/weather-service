'use strict';

var _app = angular.module('weatherApp', [
  'flash',
  'ngRoute',
  'ngCookies',
  'cControllers',
]);

_app.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'templates/home.html',
      controller: 'DashboardController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

_app.run(function($rootScope){
  $rootScope.flash = {};
  $rootScope.flash.text = '';
  $rootScope.flash.type = '';
  $rootScope.flash.timeout = 60000;
  $rootScope.hasFlash = false;
  $rootScope.reload = function(str) {
    console.log(str);
    return (typeof str !== "string");
  }
});


