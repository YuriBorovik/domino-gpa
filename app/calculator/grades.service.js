(function (angular) {
	'use strict';
	
	var Factory = function ($http) {
		var Grades = this;
		Grades.grades = [];
		Grades.getGrades = function () {
			return $http.get('calculator/data/grades.json').then(function (result) {
				Grades.grades = result.data;
				return Grades.grades;
			});
		}
		return Grades;
	}
	Factory.$inject = ['$http'];
	angular.module('testApp')
		.factory('Grades', Factory);
})(window.angular);	
