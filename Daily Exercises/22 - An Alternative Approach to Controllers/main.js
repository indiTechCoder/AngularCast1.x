var app = angular.module('phoneApp', []);

app.controller("AppCtrl",function ($scope) {
  // $scope.sayHi = function () {
  //   alert("Hi");
  // }

  this.sayHi = function () {
    alert("Hi");
  }

  return $scope.AppCtrl = this
})
