/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-14 10:08:48
 * @version $Id$
 */

App.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('app.common');
    $stateProvider 
    	.state('app',{
        	url:'/app',
        	templateUrl:'index.html',
        	controller:'CommonCtrl'
        }) 
        .state('app.common',{
        	url:'/body',
        	templateUrl:'/common/body.html',
        	controller:'AdminCtrl'
        });
      
}]);
