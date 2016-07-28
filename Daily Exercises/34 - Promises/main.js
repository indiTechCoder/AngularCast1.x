var app = angular.module('app', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "app.html",
      controller: "AppCtrl"
    })
});

app.controller("AppCtrl", function ($scope, $q) {
  var defer = $q.defer();

  defer.promise
    .then(function () {
      alert("I promised I would show up")
    })
    .then(function () {
      alert("me too")
    })
    .then(function () {
      alert("and I")
    })

   // defer.resolve();

  $scope.model = {
    message: "Click me to resolve the promise!!"
  }

  $scope.doResolve = function () {
    defer.resolve();
  }

});

app.directive("doClick",function () {
  return {
    transclude: true,
    scope: {
      target: "&"
    },
    template: '<div class="button" ng-click="target()" ng-transclude></div>'
  }
})

