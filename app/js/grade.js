//toastr插件配置
toastr.options = {  
    closeButton: false,  
    debug: false,  
    progressBar: false,  
    positionClass: "toast-top-center",  
    onclick: null,  
    showDuration: 1000,  
    hideDuration: 1000,  
    timeOut: 1000,  
    extendedTimeOut: 1000,  
    showEasing: "swing",  
    hideEasing: "linear",  
    showMethod: "fadeIn",  
    hideMethod: "fadeOut"  
};  


$('.list-group a').click(function(){
	$('.list-group a').removeClass('active');
	$(this).addClass('active');
});


var app=angular.module('myApp',['ngRoute']);



app.config(function($routeProvider){
	$routeProvider
		.when('/personInfo',{
			templateUrl:'pages/personInfo.html',
			controller:'personInfoController'
		})
		.otherwise({
			redirectTo:'/personInfo'
		});
});
var newData=[];
app.controller('personInfoController',function($http,$scope,$rootScope){
	$http({
		method:'POST',
		url:'json/personInfo.json',
		headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
		}
	}).success(function(data,status,headers,config,statusText){
			//alert(status);
			 newData=data;
			//alert(newData);
			$scope.num=newData[0].num;
			$scope.name=newData[0].name;
			$scope.sex=newData[0].sex;
			$scope.age=newData[0].age;
			$scope.class=newData[0].class;
			$scope.major=newData[0].major;
			$scope.institute=newData[0].institute;
			$scope.grade=newData[0].grade;
			toastr.success('good nice');
	}).error(function(data,status,headers,config){
		toastr.error('bad luck');
	});
});

app.controller("MyController",function($scope,$http){
	$http({
		method:'POST',
		url:'json/personInfo.json',
		headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
		}
	}).success(function(data,status,headers,config,statusText){
			//alert(status);
			var newData=data;
			//alert(newData);
			$scope.name=newData[0].name;
			toastr.success('good nice');
	}).error(function(data,status,headers,config){
		toastr.error('bad luck');
	});
});

angular.bootstrap(document,['myApp']);




