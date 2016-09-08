(function (angular) {

	'use strict';
	
	var Controller = function () {
		var ctrl= this;
		ctrl.rotateClockwise=function(){
			ctrl.onC();
		}
		ctrl.rotateCounterClockwise=function(){
			ctrl.onCc();
		}
		ctrl.createDomino=function(){
			ctrl.onNew();
		}
	};
	
	var Component = {
		bindings:{
			onC:'&',
			onCc:'&',
			onNew:'&'
		},
		templateUrl: 'domino/ui/navigation/navigation.template.html',
		controller: Controller
	}
	
	angular.module('testApp.domino')
		.component('dominoNavigation', Component);
})(window.angular)