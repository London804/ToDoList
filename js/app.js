var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/d3', {
		templateUrl: 'pages/d3.html',
		controller: 'secondController'
	})

	.when('/neat', {
		templateUrl: 'pages/neat.html',
		controller: 'thirdController',
	});
});

myApp.controller('mainController', ['$scope', function($scope) {
//the logic for main.html will go here
	$scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', function($scope) {
//for second.html here
	$scope.name = 'Second';
}]);