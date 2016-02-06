var myApp = angular.module('myApp', ['ngRoute','ui.sortable']);

myApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'mainController'
	})

	.when('/d3', {
		templateUrl: 'views/d3.html',
		controller: 'secondController'
	})

	.when('/neat', {
		templateUrl: 'views/neat.html',
		controller: 'thirdController',
	});
});

myApp.controller('mainController', ['$scope', function($scope) {
//the logic for main.html will go here
	$scope.todos = [];
	$scope.name = 'main';

	$scope.addTodo = function () {
	  $scope.todos.push($scope.todo);
	  $scope.todo = '';
	};

	$scope.removeTodo = function (index) {
	  $scope.todos.splice(index, 1);
	};

}]);

myApp.controller('secondController', ['$scope', function($scope) {
//for d3.html here
	$scope.name = 'd3';
}]);

myApp.controller('thirdController', ['$scope', function($scope) {
//for neat.html here
	$scope.name = 'neat';
}]);