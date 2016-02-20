var myApp = angular.module('myApp', ['ngRoute','ui.sortable', 'LocalStorageModule']);

myApp.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);

myApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'toDoList'
	})

	.when('/d3', {
		templateUrl: 'views/d3.html',
		controller: 'd3'
	})

	.when('/neat', {
		templateUrl: 'views/neat.html',
		controller: 'neat',
	});
});
