'use strict';

angular.module('myModalApp')
.controller('appSuvListController', function ($scope, $window, $rootScope, $http) {
	
	$scope.surveyRawData = [];
	$rootScope.surveyRowEditData = [];
	$rootScope.surveyRowShareData = [];
	
	$http.get('survey.json').success(function (data) {
	   $scope.surveyRawData = angular.fromJson(data);
	   console.log('DDD', $scope.surveyRawData);
	   $scope.createTable($scope.surveyRawData);
    });
	
	$scope.createTable = function(data){
		var gridRowData = [], tempRow;
		angular.forEach(data, function (rowData) {
            tempRow = {
                "SID" : rowData.SID,
				"SurveyName": rowData.surveyName.sname,
                "SurveyDesc": rowData.surveyDesc.sdesc,
				"NoOfQues": rowData.surveyQuestions.length,
                "CreateDate": rowData.surveyDate,
				"Edit" :  'EDIT',
				"Delete" :  'Delete',
				"Share" :  'Share'
            }
            gridRowData.push(tempRow);
        });
		$scope.gridView.data = gridRowData;
	}
	
	$scope.gridView = {
        enableHorizontalScrollbar: 0,
		onRegisterApi: function( gridApi ) {
          $scope.gridApi = gridApi;
        },
        columnDefs: [{
            displayName: 'Survey Name',
            name: 'SurveyName',
            width: '20%',
            enableSorting: true
        },{
            displayName: 'Survey Desc',
            name: 'SurveyDesc',
            width: '25%',
            enableSorting: true
        },{
            displayName: 'No of Questions',
            name: 'NoOfQues',
            width: '10%',
            enableSorting: true
        },{
            displayName: 'Created Date',
            name: 'CreateDate',
            width: '15%'
        },{
            displayName: 'Edit',
            name: 'Edit',
            width: '10%',
			cellTemplate : '<a href="#/createsurvey?EditOfSurvey" ng-click="grid.appScope.editSuvScreen(row.entity.SID)">Edit</a>'
        },{
            displayName: 'Delete',
            name: 'Delete',
            width: '10%',
			cellTemplate : '<a href="">Delete</a>'
        },{
            displayName: 'Share',
            name: 'Share',
            width: '10%',
			cellTemplate : '<a href="#/ShareOfSurvey?{{row.entity.SID}}" ng-click="grid.appScope.shareSuvScreen(row.entity.SID)">Share</a>'
        }]
    };
	
	$scope.editSuvScreen = function(sid){
		for(var x=0; $scope.surveyRawData.length > x ;x++){
			if($scope.surveyRawData[x].SID == sid){
				var Index = $scope.surveyRawData.findIndex(y => y.SID == sid);
				$rootScope.surveyRowEditData = $scope.surveyRawData[Index];
			}
		}
	}
	$scope.shareSuvScreen = function(sid){
		for(var x=0; $scope.surveyRawData.length > x ;x++){
			if($scope.surveyRawData[x].SID == sid){
				var Index = $scope.surveyRawData.findIndex(y => y.SID == sid);
				$rootScope.surveyRowShareData = $scope.surveyRawData[Index];
			}
		}
	}

});

