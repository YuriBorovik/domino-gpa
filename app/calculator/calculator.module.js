(function (angular) {
	'use strict';
	
	var Controller = function (Grades) {
		var ctrl = this;
		ctrl.gradesAverageGpa = 0;
		ctrl.grades = [];
		
		// CALCULATE AVERAGE GPA
		ctrl.recalcGradesAverageGpa = function () {
			
			ctrl.allgpas = 0;
			ctrl.gradesAverageGpa = 0;
			var i = 0, gradesLength = ctrl.grades.length, notEmptyGrades = [];
			for (i; i < gradesLength; i++) {
				
				var studentsCount = ctrl.grades[i].students.length;
				if (studentsCount > 0) {
					
					notEmptyGrades.push(ctrl.grades[i])
					
					ctrl.allgpas += ctrl.grades[i].averageGpa;
					ctrl.gradesAverageGpa = ctrl.allgpas / notEmptyGrades.length;
				}
			}
			
		}
		ctrl.recalcGradeAverageGpa = function () {
			
			var i = 0, gradesLength = ctrl.grades.length;
			for (i; i < gradesLength; i++) {
				var s = 0;
				ctrl.gpas = 0;
				
				for (s; s < ctrl.grades[i].students.length; s++) {
					
					ctrl.gpas += ctrl.grades[i].students[s].gpa;
					ctrl.grades[i].averageGpa = ctrl.gpas / ctrl.grades[i].students.length;
					
				}
				
			}
			
			ctrl.recalcGradesAverageGpa();
		};
		
		
		Grades.getGrades().then(function (result) {
			ctrl.grades = result;
			ctrl.recalcGradeAverageGpa();
		});
		
		// GRADES^ ADD & REMOVE
		ctrl.addGrade = function (gradeTitle) {
			var lastId = -1;
			if (ctrl.grades.length > 0) {
				lastId = ctrl.grades[ctrl.grades.length - 1].id
			}
			ctrl.grades.push({
				id: lastId + 1,
				title: gradeTitle,
				averageGpa: 0,
				students: []
			});
			ctrl.recalcGradesAverageGpa();
		}
		ctrl.removeGrade = function (grade) {
			var index = ctrl.grades.indexOf(grade);
			ctrl.grades.splice(index, 1);
			ctrl.recalcGradesAverageGpa();
		};
		
		// STUDENTS^ ADD & REMOVE
		ctrl.addStudent = function (grade, student) {
			var lastId = -1;
			
			var index = ctrl.grades.indexOf(grade);
			if (ctrl.grades[index].students.length > 0) {
				lastId = ctrl.grades[index].students[ctrl.grades[index].students.length - 1].id;
			}
			
			ctrl.grades[index].students.push({
				id: lastId + 1,
				name: student.name,
				gpa: student.gpa
			});
			
			ctrl.recalcGradeAverageGpa();
		}
		ctrl.removeStudent = function (gradeId, student) {
			var index = ctrl.grades[gradeId].students.indexOf(student);
			ctrl.grades[gradeId].students.splice(index, 1);
			ctrl.recalcGradeAverageGpa();
		}
	}
	Controller.$inject = ['Grades'];
	angular.module('testApp.calculator', [])
		.controller('calculatorCtrl', Controller);
})(window.angular)

