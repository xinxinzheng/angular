angular.module('myApp',['ngMock'])
    .controller('addArticle',function($scope,$http){
        $http.get('test.json')
        .then(function(data, status, headers, config){
            $scope.users = data.data;
        });
        $scope.contents = 'Hello World!';
    });