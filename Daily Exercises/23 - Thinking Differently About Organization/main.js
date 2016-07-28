var app = angular.module('phoneApp', []);

var controllers = {}
controllers.AppCtrl = function ($scope) {
    
  this.sayHi = function () {
    alert("Hi");
  }

  return $scope.AppCtrl = this
}

var directives = {}
directives.panel = function () {
  return {
    restrict: "E",
    transclude: true,
    template: '<div class="panel" ng-transclude>This is a panel component</div>'
  }
}

app.controller(controllers);
app.directive(directives);
