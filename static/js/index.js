/**
 * 
 * @authors zhengxinxin 
 * @date    2016-12-13 19:41:58
 * @version $Id$
 * 主页面
 */

var App = angular.module('myApp',['ui.router','ngMessages'])
 .config(function($httpProvider){
 	// $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Origin';
 })
 .constant('urlPre',"http://localhost/")
 .controller('CommonCtrl', function($rootScope,$scope,urlPre){
 	
 })
 .controller('AdminCtrl',function($rootScope,$scope){

 });

