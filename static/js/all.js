'use strict';

// Source: static/js/index.js
/**
 * 
 * @authors zhengxinxin 
 * @date    2016-12-13 19:41:58
 * @version $Id$
 * 主页面
 */

var App = angular.module('myApp', ['ui.router', 'ngMessages']).controller('commonCtrl', function ($rootScope, $scope) {
  console.log(123);
});

// Source: static/js/route/route.js
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-14 10:08:48
 * @version $Id$
 */

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('/', {
    url: '/',
    templateUrl: 'login.html',
    data: {
      pageTitle: '小透明的随笔 '
    }
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
App.controller('LoginCtrl', ['$scope', '$rootScope', '$httpProvider', function ($scope, $rootScope, $http) {
  $scope.login = function () {
    $scope.http();
  };
}]);
