/**
 * Created by MTA on 3/29/2015.
 */


var app = angular.module("myModule", []);
// this is how you will declare module 
// create controller 

app.controller('appController',appController);
appController.$inject = ['$scope']
function appController($scope){
	 $scope.data = 'hello world' ;
	 $scope.obj = {
	 	"name" : "TARUN SHARMA",
	 	"job" : "IT"
	 };
	 $scope.fireClick = function(){
	 	// you can fire call to backend ...
	 	alert("hello i am clicked ...");
	 }
}

