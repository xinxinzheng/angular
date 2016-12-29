/**
 * 登录逻辑
 */
App.controller('LoginCtrl', ['$scope', '$rootScope', '$httpProvider', function($scope , $rootScope , $http){
	$scope.login = () => {
		$scope.http();
	}
}])
