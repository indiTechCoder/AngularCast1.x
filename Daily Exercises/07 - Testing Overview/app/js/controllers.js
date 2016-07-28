app.controller('FirstCtrl', function($scope, Data) {
		$scope.data = Data
	})

app.controller('SecondCtrl', function($scope, Data) {
		$scope.data = Data

		$scope.reversedMessage = function (message) {
			return message.split("").reverse().join("")
		}
	})