'use strict';

// Source: static/js/index.js
/**
 * 
 * @authors zhengxinxin 
 * @date    2016-12-13 19:41:58
 * @version $Id$
 * 主页面
 */

var App = angular.module('myApp', ['ui.router', 'ngMessages']).config(function ($httpProvider) {
  // $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Origin';
}).constant('urlPre', "http://localhost/").controller('CommonCtrl', function ($rootScope, $scope, urlPre) {}).controller('AdminCtrl', function ($rootScope, $scope) {});

// Source: static/js/route/route.js
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-14 10:08:48
 * @version $Id$
 */

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('app.common');
  $stateProvider.state('app', {
    url: '/app',
    templateUrl: 'index.html',
    controller: 'CommonCtrl'
  }).state('app.common', {
    url: '/body',
    templateUrl: '/common/body.html',
    controller: 'AdminCtrl'
  });
}]);

// Source: static/js/filter/init.js
/**
 * 
 * @authors zhengxinxin (you@example.org)
 * @date    2016-12-13 17:48:38
 * @version $Id$
 * Filter
 */

// Source: static/js/ctrl/LoginCtrl.js
/**
 * 登录逻辑
 */
App.controller('LoginCtrl', function ($scope, $rootScope, $http, $location, $state, urlPre) {
  $scope.login = function () {
    $http({
      method: 'POST',
      url: urlPre + 'build/interfaces/login.php',
      data: { username: $scope.username, password: $scope.password }
    }).success(function (data) {
      $state.go('app');
    }).error(function (data, status) {});
  };
});
