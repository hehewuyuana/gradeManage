$('.list-group a').click(function(){
	$('.list-group a').removeClass('active');
	$(this).addClass('active');
});


var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/personInfo',{
			templateUrl:'pages/personInfo.html',
		})
		.otherwise({
			redirectTo:'/personInfo'
		});
});

angular.bootstrap(document,['myApp']);