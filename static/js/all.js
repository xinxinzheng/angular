// Source: static/js/index.js
/**
 * 
 * @authors zhengxinxin 
 * @date    2016-12-13 19:41:58
 * @version $Id$
 * 主页面
 */

var App = angular.module('myApp',['ui.router','ngMessages','angular-markdown-editor','hc.marked', 'hljs'])
 .config(function($httpProvider){
 	
 })
 .config(['markedProvider', 'hljsServiceProvider', function(markedProvider, hljsServiceProvider) {
    // marked config
      markedProvider.setOptions({
        gfm: true,
        tables: true,
        sanitize: true,
        highlight: function (code, lang) {
          if (lang) {
            return hljs.highlight(lang, code, true).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        }
      });

      // highlight config
      hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
      });
    }])
 .constant('urlPre',"http://localhost/")
 .controller('CommonCtrl', function($rootScope,$scope,urlPre){
 	
 })
 .controller('AdminCtrl',function($rootScope,$scope){

 })
 .controller('headerCtrl',function($rootScope,$scope){	

 })
 .controller('footerCtrl',function($rootScope,$scope){
    $scope.updatePath = () => {
        var randomx = Math.random() * 400 , attr = 'M0 0 ' , i = 0;
        while(i < 8){
            var randomy = Math.random() * 30 ;
            attr += ' L ' + (randomx * i).toFixed(1) + ' ' + randomy.toFixed(1) + ' ';
            i++;
        }
        attr += ' L2000 100 L0 200 L0 0 z';
        $("#footer").attr('d',attr);
    }
    $scope.updatePath();
    setInterval(function(){
        $scope.updatePath();
    },3000)
 })
 .controller('addArticle',function(urlPre,$http,$rootScope,$scope,marked){
    $scope.markdownService = marked('#TEST');
    $scope.contents = 'Hello world';
    $scope.convertMarkdown = function() {
        vm.convertedMarkdown = marked(vm.markdown);
    }
    $scope.fullScreenPreview = function() {
        $rootScope.markdownEditorObjects.editor1.showPreview();
        $rootScope.markdownEditorObjects.editor1.setFullscreen(true);
    }
    $scope.onFullScreenCallback = function(e) {
        e.showPreview();
    }
    $scope.onFullScreenExitCallback = function(e) {
        e.hidePreview();
    }
    $scope.hideNote = () => {
        setTimeout(function(){
               $("span.note_tag").css('display','none'); 
            },1000)
    }
    $scope.saveArticle = () => {
    	$http({
    		method:'POST',
			url:urlPre + 'build/interfaces/save_article.php',
			data:'title=' + $scope.titles + '&content=' + $scope.contents,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    	})
    	.success((ret) => {
    		$("span.note_tag").css('display','inline-block');
            $("span.note_tag").html('保存成功！');
            $scope.hideNote();
    	})
    	.error((ret) => {
            $("span.note_tag").css('display','inline-block');
            $("span.note_tag").html('保存失败！');
            $scope.hideNote();
    	});
    }
 })


// Source: static/js/route/route.js
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
