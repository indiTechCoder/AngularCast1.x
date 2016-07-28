angular.module('components', [])
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<span>Hello {{name}}</span>',
            link : function(elm,scope,attr){
                       
            },
            controller : function(){

            }
        }
    })

angular.module('HelloApp', ['components'])
.controller("HelloCtrl", ["$scope", function($scope){
  $scope.name = "Toto";
}])

<div class="hello" name="hello" hello-World="name" ></div>
