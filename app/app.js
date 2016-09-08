(function (angular) {
	'use strict';
	
	var routeConf = function ($stateProvider, $urlRouterProvider, $locationProvider) {
		var domino = {
			name: 'domino',
			url: '/dominos',
			templateUrl: 'domino/domino.template.html',
			controller:'dominoCtrl',
			controllerAs:'Domino'
		}
		
		var school = {
			name: 'calculator',
			url: '/school',
			templateUrl: 'calculator/calculator.template.html',
			controller:'calculatorCtrl',
			controllerAs:'Calculator'
			
		}
		
		var error = {
			name: 'home',
			url: '/',
			templateUrl: 'home/home.template.html'
			
		};
		$urlRouterProvider.otherwise('/');
		$stateProvider.state(domino);
		$stateProvider.state(school);
		$stateProvider.state(error);
		
		$locationProvider.hashPrefix = '!';
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
	
	angular.module('testApp', [
		'ui.router',
		'ui.grid',
		'testApp.domino',
		'testApp.calculator'
	]);
	
	angular.module('testApp').config(routeConf);

})(window.angular);
