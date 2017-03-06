describe('addArticle', function(){
    var scope , $httpBackend;

    beforeEach(angular.mock.module('myApp'));
 
    beforeEach(angular.mock.inject(function($rootScope,$controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'test.json').respond([{
            id: 1,
            name: 'Bob'
        }, {
            id: 2,
            name: 'Jane'
        }]);

        scope = $rootScope.$new();
        
        $controller('addArticle', {
            $scope: scope
        });
    }));

    // 测试从这里开始
    it('should have variable contents = "Hello World!"', function(){
        expect(scope.contents).toBe('Hello World!');
    });

    it('should fetch list of users', function() {
        $httpBackend.flush();
        expect(scope.users.length).toBe(2);
        expect(scope.users[0].name).toBe('Bob');
        //输出结果以方便查看
        for(var i=0;i<scope.users.length;i++){
            console.log(scope.users[i].name);
        }
    });

});