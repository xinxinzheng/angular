/**
 * 
 * @authors zhengxinxin 
 * @date    2016-12-13 19:41:58
 * @version $Id$
 * 主页面
 */

var App = angular.module('myApp',['ui.router','ngMessages','angular-markdown-editor','hc.marked', 'hljs',])
 .config(function($httpProvider){
 	// $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Origin';
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
 .controller('addArticle',function(urlPre,$http,$rootScope,$scope,marked){
    $scope.markdownService = marked('#TEST');
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
    $scope.saveArticle = () => {
    	$http({
    		method:'POST',
			url:urlPre + 'build/interfaces/save_article.php',
			data:'title=' + $scope.titles + '&content=' + $scope.contents,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    	})
    	.success((ret) => {
    		console.log(ret);
    	})
    	.error(() => {

    	});
    }
 })

