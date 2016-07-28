var app = angular.module("app", []);

app.config(function ($provide) {
  $provide.provider("game", function () {
    return {
      $get: function () {
        return {
          title: "WorldCraft"
        }
      }
    }
  })
})

app.controller("AppCtrl", function ($scope, game) {
  $scope.title = game.title;
});