app.filter('reverse', function (Data) {
		return function (text) {
			return text.split("").reverse().join("")
		}
	})