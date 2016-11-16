//切换登录界面
$('.nav-pills li').click(function(){
	$('.nav-pills li').removeClass('active');
	$(this).addClass('active');
});



//定义模板
var app=angular.module('myApp',['ngRoute']);

app.controller('MyController',function($scope){

});
app.controller('StuLoginController',function($scope){

});


app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/stuLogin',{
			templateUrl:'pages/stuLogin.html',
			controller:'StuLoginController'
		})
		/*.when('/stuLogin',{
			templateUrl:'pages/managerLogin.html'
		})
		.when('/stuLogin',{
			templateUrl:'pages/teacherLogin.html'
		})*/
		.otherwise({
			redirectTo:'/stuLogin'
		});
}]);

angular.bootstrap(document,['myApp']);

