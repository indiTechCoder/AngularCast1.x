//Angular.js app definition
var app = angular.module('origamy',[]);


//Controller definition
app.controller('OrigamyCtrl', ['$scope', function($scope){
    //Scope function
    $scope.double = function(value) { 
        return value * 2; 
    };
        $scope.new_name     = " DEFAULT INPUT";
        $scope.new_email    = " DEFAULT INPUT";
        $scope.new_contact  = " DEFAULT INPUT";
    //Schools for the repeater 
    $scope.schools = [
        {
            "name"      :"San Antonio School", 
            "email"     :"admin@sananthonio.net",
            "contact"   :"Rosemary"
        },             
        {
                           
            "name"      :"Tech Central School", 
            "email"     :"admin@techschool.net",
            "contact"   :"Any"
        },             
        {
            "name"      :"South West School", 
            "email"     :"admin@southwschool.net",
            "contact"   :"Gabriel"
        }
    ];
    
    
    //Add a new school
    $scope.addSchool = function(){
        console.log($scope.new_name,$scope.new_email);
        $scope.schools.push({
            name    : $scope.new_name,
            email   : $scope.new_email,
            contact : $scope.new_contact
        });
        
        $scope.new_name     = "";
        $scope.new_email    = "";
        $scope.new_contact  = "";
        
    }
}]);

