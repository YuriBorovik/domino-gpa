(function (angular) {

	'use strict';
	
	var Controller = function () {
		var ctrl =this;
		
		ctrl.selectTop=function(face){
			ctrl.onTopSelect({top:face});
		}
		ctrl.selectBottom=function(face){
			ctrl.onBottomSelect({bottom:face});
		}
	};
	
	var Component = {
		bindings:{
			onTopSelect:'&',
			onBottomSelect:'&',
			selectingTop:'<',
			selectingBottom:'<'
		},
		templateUrl: 'domino/faceSelect/faceSelect.template.html',
		controller: Controller
	}
	
	angular.module('testApp.domino')
		.component('dominoFaceSelect', Component);
})(window.angular)