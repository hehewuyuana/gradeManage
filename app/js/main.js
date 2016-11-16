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
	$('form[name=myForm]').submit(function(ev){
		//alert(1);
		var user=$('#inputName').val();
		var pass=$('#inputPass').val();
		//alert(user+"|"+pass);
		$.ajax({
			type:'GET',
			url:'php/validate.php',
			data:"user="+user+"&pass="+pass,
		}).done(function(resp,status,xhr){
			if(resp==1){
				window.location.href='gradeManage.html';
			}
		}).fail(function(){console.log("请求失败")});
		ev.stopPropagation();
		ev.preventDefault();
	});

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


