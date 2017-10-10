'use strict';

angular.module('myModalApp')
.controller('appSharePreviewController', function ($scope, $window, $rootScope) {
	var SUVID = window.location.href.split("?")[1];
	$rootScope.surveyRowShareData=$scope.surveyRowShareData;
	console.log('SUVID', $scope.surveyRowShareData);	
	$scope.questionCollection = $scope.surveyRowShareData.surveyQuestions;
	$scope.surveyName =$scope.surveyRowShareData.surveyName;
	$scope.surveyDesc =$scope.surveyRowShareData.surveyDesc;
	
	$scope.queObj = {};
	$scope.qansObj = {};
	$scope.qansCBObj = {};

	$scope.submitSurveyData = function(qansObj, qansCBObj){
		console.log('SSS', qansObj, qansCBObj);
	}
	
});