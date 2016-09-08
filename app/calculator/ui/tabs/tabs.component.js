(function (angular) {
	
	'use strict';
	
	var Controller = function ($scope) {
		var ctrl = this;
		ctrl.selectedTab = 0;
		ctrl.$onInit=function(){
			ctrl.currentGrade={id:0,title:'demo',students:[]};
			ctrl.gridOptions = {
				enableHorizontalScrollbar: 0,
				enableVerticalScrollbar: 2,
				infiniteScrollRowsFromEnd: 40,
				infiniteScrollUp: true,
				infiniteScrollDown: true,
				columnDefs: [
					{name: 'name'},
					{name: 'gpa'},
					{
						name: ' ',
						cellTemplate: '<button class="btn  text-center" ng-click="grid.appScope.$ctrl.deleteRow(row)">&#10006;</button>'
					}
				]
			}
			$scope.$watch(function() {return ctrl.grades; },function() {
				ctrl.currentGrade=ctrl.grades[0];
			});
		}
		
		
		
	
		
		
		ctrl.addGrade = function (gradeTitle) {
			ctrl.onAddGrade({title: gradeTitle});
			ctrl.selectTab(ctrl.grades[ctrl.grades.length-1]);
			document.querySelectorAll('.tab-title-input')[0].focus();
		}
		ctrl.removeGrade = function (grade) {
			ctrl.onRemoveGrade({item: grade});
			ctrl.selectTab(ctrl.grades[grade.id]);
		}
		ctrl.addStudent = function (grade, newStudent) {
			ctrl.onAddStudent({
				grade: grade,
				student: newStudent
			});
		}
		ctrl.deleteRow = function (row) {
			ctrl.onRemoveStudent({grade:ctrl.selectedTab,student:row.entity});
		};
		
	
		
		
		ctrl.selectTab = function (tab) {
			if (angular.isDefined(tab)){
				ctrl.selectedTab = tab.id;
				var index = ctrl.grades.indexOf(tab);
				ctrl.currentGrade=ctrl.grades[index];
			}
			else {
				ctrl.selectedTab = 0;
				ctrl.currentGrade=ctrl.grades[0];
			}
			
		}
	};
	
	Controller.$inject = ['$scope'];
	
	var Component = {
		bindings: {
			grades: '<',
			students: '<',
			onAddGrade: '&',
			onRemoveGrade: '&',
			onAddStudent: '&',
			onRemoveStudent:'&',
			averageGpa:'<'
		},
		templateUrl: 'calculator/ui/tabs/tabs.template.html',
		controller: Controller
	}
	
	angular.module('testApp.domino')
		.component('tabs', Component);
})(window.angular)