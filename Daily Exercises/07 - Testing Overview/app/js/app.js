var app = angular.module('myApp',[])

app.factory('Data', function () {
	return { message: "I'm data from a service"}
})