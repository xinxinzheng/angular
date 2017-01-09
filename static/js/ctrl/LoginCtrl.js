/**
 * 登录逻辑
 */
App.controller('LoginCtrl', function($scope , $rootScope , $http , $location , $state ,urlPre){
	$scope.login = () => {
		$http({
			method:'POST',
			url:urlPre + 'build/interfaces/login.php',
			data:{username:$scope.username , password:$scope.password}
		})
		.success((data) => {
			$state.go('app');
		})
		.error((data,status) => {

		})
	}
})
