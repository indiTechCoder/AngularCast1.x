/**
 * Created by MTA on 4/5/2015.
 */

// define angular module myApp 
// now i can create controllers and all //
var app = angular.module("myApp", []);
// define dep of app with them 
app.controller("myCtrl" , myCtrl);

myCtrl.$inject = ['$scope'];
function myCtrl($scope){
    $scope.name = "User 01";
    $scope.age = 0;
    $scope.countries = [
        "Pakistan",
        "Afghanistan",
        "India",
        "UK"
    ];
}
// you have data in controller arary obj =>>
// now how to show data on UI 
app.controller("countriesList", function($scope){
    var population = 124.9;
    $scope.countries = [
        {name: 'France', population: 63.1},
        {name: 'United Kingdom', population: 61.8}
    ];
    $scope.worldsPercentage = function (countryPopulation){
        return ((countryPopulation / population) * 100);
    }
});