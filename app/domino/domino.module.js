(function (angular) {
	'use strict';
	
	var Controller = function () {
		var ctrl = this;
		
		ctrl.controls = {
			rotation: 0,
			size: 1,
			speed: -1,
			rotateClockwise: function () {
				ctrl.controls.rotation = ctrl.controls.rotation + 90;
			},
			rotateCounterClockwise: function () {
				ctrl.controls.rotation = ctrl.controls.rotation - 90;
			},
			changeSpeed: function (speed) {
				ctrl.controls.speed = Math.max(speed);
			},
			changeSize: function (size) {
				ctrl.controls.size = size;
			}
		}
		
		ctrl.dominos = {
			faceUp: 'two',
			faceDown: 'six',
			isSelectTop: false,
			isSelectBottom: false,
			toggleStage: function (stage) {
				console.log(stage);
				if (stage == 'first') {
					ctrl.dominos.isSelectBottom = false;
					ctrl.dominos.isSelectTop = true;
				}
				else if (stage == 'second') {
					ctrl.dominos.isSelectBottom = true;
					ctrl.dominos.isSelectTop = false;
				}
				else {
					ctrl.dominos.isSelectBottom = false;
					ctrl.dominos.isSelectTop = false;
				}
			},
			newDomino: function () {
				ctrl.dominos.toggleStage('first');
			},
			selectTopFace: function (face) {
				ctrl.dominos.faceUp = face;
				ctrl.dominos.toggleStage('second');
			},
			selectBottomFace: function (face) {
				ctrl.dominos.faceDown = face;
				ctrl.dominos.toggleStage('final');
			}
		}
		
	}
	angular.module('testApp.domino', [])
		.controller('dominoCtrl', Controller);
})(window.angular);	
