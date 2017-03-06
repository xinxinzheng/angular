/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-14 10:08:48
 * @version $Id$
 */

App.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('temp');
    $stateProvider 
    	.state('temp',{
        	url:'/temp',
        	templateUrl:'common/body.html',
        }) 
        .state('article',{
        	url:'/article',
        	templateUrl:'common/article_list.html',
        });
      
}]);
