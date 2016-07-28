var app = angular.module("app", []);

app.controller("RoomCtrl", function () {
  this.openDoor = function () {
    alert("creak");
  }
  this.buttonTitle = "Open the Door";
  this.foo = "Room foo";
})

app.controller("OtherCtrl", function () {
  this.foo = "Other foo";
})