(function (angular) {
	
	'use strict';
	
	var Controller = function ($scope) {
		var ctrl = this;

	};
	
	var Component = {
		bindings: {
			averageGpa: '<'
		},
		templateUrl: 'calculator/ui/header/header.template.html',
		controller: Controller
	}
	
	angular.module('testApp.domino')
		.component('calculatorHeader', Component);
})(window.angular)