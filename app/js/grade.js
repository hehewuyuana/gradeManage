//toastr插件配置
toastr.options = {  
    closeButton: false,  
    debug: false,  
    progressBar: false,  
    positionClass: "toast-top-center",  
    onclick: null,  
    showDuration: "100",  
    hideDuration: "1000",  
    timeOut: "0",  
    extendedTimeOut: "1000",  
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

angular.bootstrap(document,['myApp']);

app.controller('personInfoController',function($http,$scope){
	$http({
		method:'POST',
		url:'json/personInfo.json',
		headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
		},
	}).success(function(data,status,headers,config,statusText){
		//toastr({title:'Success',priority:'success',message:'good nice'});
		$scope.$apply(function(){
			var newData=JSON.parse(data);
			$scope.num=newData.num;
			$scope.name=newData.name;
			$scope.sex=newData.sex;
			$scope.age=newData.age;
			$scope.class=newData.class;
			$scope.major=newData.major;
			$scope.institute=newData.institute;
			$scope.grade=newData.grade;
			toastr.success('good nice');
		});
	}).error(function(data,status,headers,config,statusText){
		//toastr({title:'Error',priority:'error',message:'bad luck'});
		toastr.error('bad luck');
	});
});

