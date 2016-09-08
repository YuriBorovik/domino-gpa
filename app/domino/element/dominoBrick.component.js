(function (angular) {
	
	'use strict';
	
	var Controller = function ($element) {
		var ctrl = this;
		if (ctrl.faceOnly) {
			$element.addClass('half');
		}
	};
	
	Controller.$inject=['$element'];
	
	var Component = {
		bindings: {
			faceOnly: '<',
			faceUp: '@',
			faceDown:'@',
			size:'<'
		},
		templateUrl: 'domino/element/dominoBrick.template.html',
		controller: Controller
	}
	
	angular.module('testApp.domino')
		.component('dominoBrick', Component);
})(window.angular)