(function (angular) {

	'use strict';
	
	var Controller = function () {
		var ctrl= this;
		ctrl.changeSize=function(){
			ctrl.onSize({size:Math.round((ctrl.size/100)*10)/10});
		}
		ctrl.changeSpeed=function(){
			ctrl.onSpeed({speed:-+Math.round((ctrl.speed/100)*10)/10});
		}
		console.log(ctrl);
	};
	
	var Component = {
		bindings:{
			onSize:'&',
			onSpeed:'&',
			size:'<',
			speed:'<'
		},
		templateUrl: 'domino/ui/controls/controls.template.html',
		controller: Controller
	}
	
	var Filter= function(){
		return function(input) {
			var out = '';
			if (input<=100) {
			 out=Math.abs(Math.round((input/100)*10)/10);
			} else {
				out=Math.round(input*10/10);
			}
			return out;
		};
	}
	
	angular.module('testApp.domino')
		.filter('parseSpeed', Filter)
		.component('dominoControls', Component);
})(window.angular)