/**
 * Created by MTA on 4/5/2015.
 */

// define angular module myApp 
// now i can create controllers and all //
var app = angular.module("myApp", []);   // setting a module 
// define dep of app with them 
// getter and seeter of module 
app.controller("myCtrl" , myCtrl);
app.factory("myFactory" , myFactory);

myFactory.$injet = ['$scope','$http'];
myCtrl.$inject = ['$state','$http','$scope'];

function myFactory($scope,$http){

}

function myCtrl($state,$http,$scope){
    // this object //
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