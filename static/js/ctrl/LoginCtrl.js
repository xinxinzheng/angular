/**
 * 登录逻辑
 */
App.controller('LoginCtrl', ['$scope', '$rootScope', '$http', 'urlPre', function($scope , $rootScope , $http , urlPre){

	$scope.login = () => {
		console.log(1234);
		$http({
			method:'POST',
			url:urlPre + 'build/interfaces/login.php',
			data:{username:$scope.username , password:$scope.password}
		})
		.success((data) => {

		})
		.error((data,status) => {

		})
	}
}])
