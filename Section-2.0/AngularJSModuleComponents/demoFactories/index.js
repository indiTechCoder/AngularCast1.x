/**
 * Created by MTA on 5/10/2015.
 */

var app = angular.module("myFactoryDemo", []);


app.factory("myTODOStore", function(){
    var taskList = [];
    return {
        addTask  : function (task){
            taskList.push(task);
        },
        getTask  : function(){
            return taskList;
        }
    };
});
app.controller("addTODO", function($scope, myTODOStore){
    $scope.TODO     = "";
    $scope.addTODO  = function(){
        myTODOStore.addTask($scope.TODO);
        $scope.TODO = "";
    };
});

app.controller("viewTODO", function(myTODOStore, $scope){
    $scope.allTODO = myTODOStore.getTask();
});