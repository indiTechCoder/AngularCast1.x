var app = angular.module("app", []);

app.factory("game", function () {
  return {
    title: "StarCraft"
  }
})

app.controller("AppCtrl", function ($scope, game) {
  $scope.title = game.title;
});