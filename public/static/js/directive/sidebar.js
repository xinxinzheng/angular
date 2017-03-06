/**
 * 
 * @sidebar directive
 * @date    2017-01-10 15:21:18
 * @version $Id$
 */

 App.directive('mySideBar' , () => {
 	return({
 		restrict:'A',
 		priority:0,
 		terminal:true,
 		// template:'',
 		templateUrl:'common/sidebar.html',
 		replace:true,
 		scope:true,

 	})
 })

