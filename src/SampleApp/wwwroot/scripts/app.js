(function () {
	var app = angular.module('app', []);
	app.controller('MyController', function ($http) {
		var myApp = this;
		myApp.title = "This is my Angular Title"; 
		myApp.items = [];
		$http.get('partials/tutorials.js').success(function (data) {
			myApp.items = data;
		});
	});
})();