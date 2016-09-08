(function (angular) {

	'use strict';
	
	var Controller = function () {
		var ctrl= this;
		
	};
	
	var Component = {
		
		templateUrl: 'shared/ui/mainMenu/mainMenu.template.html',
		controller: Controller
	}
	
	angular.module('testApp')
		.component('mainMenu', Component);
})(window.angular)