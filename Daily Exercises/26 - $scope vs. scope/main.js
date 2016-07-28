var app = angular.module('app', []);

app.controller("MyCtrl", function ($scope, $http, $parse) {
  console.log($http);
})

app.controller("MyCtrl2", ['$scope', '$http', function (b, a) {
  console.log(b);
}])

app.directive("myDirective",function () {
  return {
    scope: {},
    link: function (scope, element, attrs) {
      // console.log(scope);
    }
  }
})
