'use strict';

angular.module('myModalApp')
.controller('appModalController', function ($scope, $window, $rootScope) {
	
	$scope.isEdit = window.location.href.split("?")[1];
	$scope.EditSurveyQuestion = $rootScope.surveyRowEditData;
	
	if($scope.isEdit == 'EditOfSurvey'){
		$scope.isEditVal = true;
		$scope.questionCollection = $scope.EditSurveyQuestion.surveyQuestions;
		$scope.surveyName =$scope.EditSurveyQuestion.surveyName;
		$scope.surveyDesc =$scope.EditSurveyQuestion.surveyDesc;
	}else{
		$scope.questionCollection = [];	
		$scope.isEditVal = false;
		$scope.surveyName = '';
		$scope.surveyDesc = '';
	}

	$scope.firstRate = 0;
    $scope.secondRate = 3;
    $scope.readOnly = true;
    	
    $scope.message = 'Add question for survey';
    $scope.showModal = false;
    $scope.heading = '';
	$scope.modalId = '';
    
	$scope.rbCntrlOpt = [];
	$scope.selected = [];
	
	
    /*Controlles Objects*/
	$scope.queTxtObj = {};
	$scope.queRadObj = {};
	$scope.queChkObj = {};
	$scope.queSelObj = {};
	$scope.queRatObj = {};
	
	$scope.newObject = {};
	
	$scope.newRadObject = {};
	$scope.newChkObject = {};
	$scope.newSelObject = {};
	
	$scope.items = [1,2];
	$scope.rowObj = [];
	$scope.count =2;
	var k=1;
	$scope.itemEditAdd ={};
	$scope.itemTotalAdded=[]; 
	// To add Row.
	$scope.addRow = function(){
		$scope.count = $scope.count+1;
		$scope.items.push($scope.count); 
	}
	// To add Row.
	$scope.addRowEdit = function(Obj){
		//$scope.count = $scope.count+1;
		$scope.itemEditAdd = {
			name: ''
		}
		$scope.itemTotalAdded = Obj.options;
		$scope.itemTotalAdded.push($scope.itemEditAdd); 
	}
	
	//To deleteRow
	$scope.deleteRow = function(){
		if($scope.count>2){
			$scope.items.splice($scope.count-1, 1);
			$scope.count = $scope.count-1;
		}
		else{
			alert("You are required to have at least 2 choices.");
		}

	}
	$scope.deleteRowEdit = function(Obj){
		if($scope.count>2){
			$scope.itemTotalAdded = Obj.options;
			$scope.itemTotalAdded.splice($scope.count-1, 1);
			$scope.count = $scope.count-1;
		}else{
			alert("You are required to have at least 2 choices.");
		}	
	}
	
	$scope.openQuestionAddingPopup = function (id,item) {
		if(item){
           angular.element("#"+id).modal("show"); //open popup in Edit mode
		   $scope.questionDetailObj = item;
		   $scope.updateToActualObj = item;
		} else{
			if (id == 'textInput') {
				$scope.queTxtObj = '';
				$scope.heading = 'Single Textbox Question';
				$scope.modalId = 'textInput';
				
			} else if (id == 'radioButton') {
				$scope.items = [1,2];
				$scope.rowObj = [];
				$scope.count =2;
				var optName = $('.radBtnOpt').attr('name').slice(0, 7);
				k++;
				$('.radBtnOpt').attr('name',optName+k)
				$scope.heading = 'One Answer Question';
				$scope.modalId = 'radioButton';
			} else if (id == 'checkBox') {
				$scope.items = [1,2];
				$scope.rowObj = [];
				$scope.count =2;
				$scope.heading = 'Multiple Choice Question';
				$scope.modalId = 'checkBox';
			} else if (id == 'selectBox') {
				$scope.items = [1,2];
				$scope.rowObj = [];
				$scope.count =2;
				$scope.heading = 'Dropdown Question';
				$scope.modalId = 'selectBox';
			} else if (id == 'rating') {
				$scope.heading = 'Ranking Question';
				$scope.modalId = 'rating';
			}
		}
		var openPopup = $scope.modalId;
		angular.element("#"+openPopup).modal("show");
	}

    $scope.init = function () {
        $scope.getQuestionList();
    }
	
	//Submit Textbox Control
	$scope.submitTxtQuestion = function (detailObj, cntrlsObj) {
		var detailObjTxtComb = [];
		var detailObj = angular.copy(detailObj);
		detailObj.id = (new Date().getTime());
		if(detailObj.isRequired == undefined){detailObj.isRequired = false;
		}else{detailObj.isRequired = true;}
		detailObjTxtComb = {
			id :	detailObj.id,
			isRequired : detailObj.isRequired,
			qTitle : detailObj.qTitle,
			question : detailObj.question,
			type : cntrlsObj
		}
		$scope.questionCollection.push(detailObjTxtComb);
		angular.element("#"+$scope.modalId).modal("hide");
		$scope.queTxtObj='';
	}
	//Submit Radio Button Control
    $scope.submitRBQuestion = function (detailObj, newRadObject, cntrlsObj) {
		$scope.rowObj = [];
		var detailObjComb =[];
		detailObj.id = (new Date().getTime());
		if(detailObj.isRequired == undefined){detailObj.isRequired = false;
		}else{detailObj.isRequired = true;}
		for(var i=1;i<=$scope.count;i++){
			$scope.rowObj.push({name:$scope.newRadObject['name'+i]});
		}
		detailObjComb = {
			id :	detailObj.id,
			isRequired : detailObj.isRequired,
			qTitle : detailObj.qTitle,
			question : detailObj.question,
			type : cntrlsObj,
			options: $scope.rowObj
		}
		$scope.questionCollection.push(detailObjComb);
        angular.element("#"+$scope.modalId).modal("hide");
		$scope.queRadObj={};
		$scope.newRadObject = {};
    }
	
	
	//Submit Checkbox Control
    $scope.submitCBQuestion = function (detailObj, newChkObject, cntrlsObj) {
		$scope.rowObj = [];
		var detailCBObjComb =[];
		detailObj.id = (new Date().getTime());
		if(detailObj.isRequired == undefined){detailObj.isRequired = false;
		}else{detailObj.isRequired = true;}
		for(var i=1;i<=$scope.count;i++){
			$scope.rowObj.push({name:$scope.newChkObject['name'+i]});
		}
		detailCBObjComb = {
			id :	detailObj.id,
			isRequired : detailObj.isRequired,
			qTitle : detailObj.qTitle,
			question : detailObj.question,
			type : cntrlsObj,
			options: $scope.rowObj
		}
		$scope.questionCollection.push(detailCBObjComb);
        angular.element("#"+$scope.modalId).modal("hide");
		$scope.queChkObj={};
		$scope.newChkObject = {};
	}
	
	//Submit Select Box Control
    $scope.submitSBQuestion = function (detailObj, newSelObject, cntrlsObj) {
		$scope.rowObj = [];
		var detailSBObjComb =[];
		detailObj.id = (new Date().getTime());
		if(detailObj.isRequired == undefined){detailObj.isRequired = false;
		}else{detailObj.isRequired = true;}
		for(var i=1;i<=$scope.count;i++){
			$scope.rowObj.push({name:$scope.newSelObject['name'+i]});
		}
		detailSBObjComb = {
			id :	detailObj.id,
			isRequired : detailObj.isRequired,
			qTitle : detailObj.qTitle,
			question : detailObj.question,
			type : cntrlsObj,
			options: $scope.rowObj
		}
		$scope.questionCollection.push(detailSBObjComb);
        angular.element("#"+$scope.modalId).modal("hide");
		$scope.queSelObj={};
		$scope.newSelObject = {};
    }

	//Submit Rating Control
	$scope.submitRTQuestion = function (detailObj, cntrlsObj) {
		var detailObjRTComb = [];
		detailObj.id = (new Date().getTime());
		if(detailObj.isRequired == undefined){detailObj.isRequired = false;
		}else{detailObj.isRequired = true;}
		detailObjRTComb = {
			id :	detailObj.id,
			isRequired : detailObj.isRequired,
			qTitle : detailObj.qTitle,
			question : detailObj.question,
			type : cntrlsObj
		}
		$scope.questionCollection.push(detailObjRTComb);
		angular.element("#"+$scope.modalId).modal("hide");
		$scope.queRatObj='';
	}
	
	//Edit Question 
    $scope.editQuestion = function (itemEdit) {
        var itemEdit = angular.copy(itemEdit);
		var objectTxtEdit = true;
        if (itemEdit.type == 'textBox') {
			$scope.modalId = itemEdit.type+'Edit';
			$scope.openQuestionAddingPopup($scope.modalId, itemEdit);
			$scope.index = $scope.questionCollection.findIndex(y => y.question == itemEdit.question);
        }
		if (itemEdit.type == 'radioButton') {
			$scope.modalId = itemEdit.type+'Edit';
			$scope.openQuestionAddingPopup($scope.modalId, itemEdit);
			$scope.indexRB = $scope.questionCollection.findIndex(y => y.question == itemEdit.question);
        }
		if (itemEdit.type == 'checkBox') {
			$scope.modalId = itemEdit.type+'Edit';
			$scope.openQuestionAddingPopup($scope.modalId, itemEdit);
			$scope.indexCB = $scope.questionCollection.findIndex(y => y.question == itemEdit.question);
        }
		if (itemEdit.type == 'selectBox') {
			$scope.modalId = itemEdit.type+'Edit';
			$scope.openQuestionAddingPopup($scope.modalId, itemEdit);
			$scope.indexSB = $scope.questionCollection.findIndex(y => y.question == itemEdit.question);
        }
		if (itemEdit.type == 'rating') {
			$scope.modalId = itemEdit.type+'Edit';
			$scope.openQuestionAddingPopup($scope.modalId, itemEdit);
			$scope.indexRat = $scope.questionCollection.findIndex(y => y.question == itemEdit.question);
        }
    }
	
	//Edit Text Control
	$scope.submitEditTxtQuestion=function(){
		var objectTxtEdit = true;
		var index = $scope.index;
		
		for(var k=0; k < $scope.questionCollection.length; k++){
			if($scope.questionCollection[k].question.toLowerCase() == $scope.updateToActualObj.question.toLowerCase()){
				objectTxtEdit = false;
			}
			if(objectTxtEdit){
				$scope.updateToActualObj.id = (new Date().getTime());
				$scope.questionCollection[index].id = $scope.updateToActualObj.id;
				$scope.questionCollection[index].isRequired = $scope.updateToActualObj.isRequired;
				$scope.questionCollection[index].qTitle = $scope.updateToActualObj.qTitle;
				$scope.questionCollection[index].question = $scope.updateToActualObj.question;
			}
		}
		angular.element("#textBoxEdit").modal("hide");	
	}
	
	//Edit RadioButton Control
	$scope.submitEditRBQuestion = function(){
		var objectRBEdit = true;
		var indexRB = $scope.indexRB;
		for(var k=0; k < $scope.questionCollection.length; k++){
			if($scope.questionCollection[k].question.toLowerCase() == $scope.updateToActualObj.question.toLowerCase()){
				objectRBEdit = false;
			}
			if(objectRBEdit){
				$scope.updateToActualObj.id = (new Date().getTime());
				$scope.questionCollection[indexRB].id = $scope.updateToActualObj.id;
				$scope.questionCollection[indexRB].isRequired = $scope.updateToActualObj.isRequired;
				$scope.questionCollection[indexRB].qTitle = $scope.updateToActualObj.qTitle;
				$scope.questionCollection[indexRB].question = $scope.updateToActualObj.question;
			}
			if($scope.questionCollection[indexRB].options.length <= $scope.updateToActualObj.options.length || $scope.questionCollection[indexRB].options.length >= $scope.updateToActualObj.options.length){
				$scope.questionCollection[indexRB].options = $scope.updateToActualObj.options;
			}
		}
		angular.element("#radioButtonEdit").modal("hide");	
	}
	
	//Edit CheckBox Control
	$scope.submitEditCBQuestion = function(){
		var objectCBEdit = true;
		var indexCB = $scope.indexCB;
		for(var k=0; k < $scope.questionCollection.length; k++){
			if($scope.questionCollection[k].question.toLowerCase() == $scope.updateToActualObj.question.toLowerCase()){
				objectCBEdit = false;
			}
			if(objectCBEdit){
				$scope.updateToActualObj.id = (new Date().getTime());
				$scope.questionCollection[indexCB].id = $scope.updateToActualObj.id;
				$scope.questionCollection[indexCB].isRequired = $scope.updateToActualObj.isRequired;
				$scope.questionCollection[indexCB].qTitle = $scope.updateToActualObj.qTitle;
				$scope.questionCollection[indexCB].question = $scope.updateToActualObj.question;
			}
			if($scope.questionCollection[indexCB].options.length <= $scope.updateToActualObj.options.length || $scope.questionCollection[indexCB].options.length >= $scope.updateToActualObj.options.length){
				$scope.questionCollection[indexCB].options = $scope.updateToActualObj.options;
			}
			/*
			for(var z =0; z < $scope.questionCollection[indexCB].options.length; z++){
				$scope.questionCollection[indexCB].options[z].name = $scope.updateToActualObj.options[z].name;
			}*/
		}
		angular.element("#checkBoxEdit").modal("hide");	
	}
	
	//Edit SelectBox Control
	$scope.submitEditSBQuestion = function(){
		var objectSBEdit = true;
		var indexSB = $scope.indexSB;
		for(var k=0; k < $scope.questionCollection.length; k++){
			if($scope.questionCollection[k].question.toLowerCase() == $scope.updateToActualObj.question.toLowerCase()){
				objectSBEdit = false;
			}
			if(objectSBEdit){
				$scope.updateToActualObj.id = (new Date().getTime());
				$scope.questionCollection[indexSB].id = $scope.updateToActualObj.id;
				$scope.questionCollection[indexSB].isRequired = $scope.updateToActualObj.isRequired;
				$scope.questionCollection[indexSB].qTitle = $scope.updateToActualObj.qTitle;
				$scope.questionCollection[indexSB].question = $scope.updateToActualObj.question;
			}
			if($scope.questionCollection[indexSB].options.length <= $scope.updateToActualObj.options.length || $scope.questionCollection[indexSB].options.length >= $scope.updateToActualObj.options.length){
				$scope.questionCollection[indexSB].options = $scope.updateToActualObj.options;
			}
			/*for(var z =0; z < $scope.questionCollection[indexSB].options.length; z++){
				$scope.questionCollection[indexSB].options[z].name = $scope.updateToActualObj.options[z].name;
			}*/
		}
		angular.element("#selectBoxEdit").modal("hide");	
	}
	
	//Edit Rating Control
	$scope.submitEditRatQuestion=function(){
		var objectRatEdit = true;
		var indexRat = $scope.indexRat;
		for(var k=0; k < $scope.questionCollection.length; k++){
			if($scope.questionCollection[k].question.toLowerCase() == $scope.updateToActualObj.question.toLowerCase()){
				objectRatEdit = false;
			}
			if(objectRatEdit){
				$scope.updateToActualObj.id = (new Date().getTime());
				$scope.questionCollection[indexRat].id = $scope.updateToActualObj.id;
				$scope.questionCollection[indexRat].isRequired = $scope.updateToActualObj.isRequired;
				$scope.questionCollection[indexRat].qTitle = $scope.updateToActualObj.qTitle;
				$scope.questionCollection[indexRat].question = $scope.updateToActualObj.question;
			}
		}
		angular.element("#ratingEdit").modal("hide");	
	}

	//Cancel Popup
    $scope.cancelQuestion =  function(){
		angular.element("#"+$scope.modalId).modal("hide");
    }
	
    //Open Preview
	$scope.preview = function(url, target){
		angular.element("#previewMode").modal("show");
			/*	Working Code 
			var previewHtml = document.getElementById("previewMode").outerHTML;
			var preWindow = window.open('','','width=500,height=500');
			var doc = preWindow.document;
			doc.open();
			doc.write(previewHtml);
			doc.close(); */
	}
	//save survey
	$scope.savesurvey = function(){
		var saveSurvey = {
				surveyName : $scope.surveyName,
				surveyDesc : $scope.surveyDesc,
				surveyDate : (new Date().getTime()),
				surveyQuestions : $scope.questionCollection
			}
		//console.log('OBJ', saveSurvey);
		console.log(JSON.stringify(saveSurvey));
	}
	
	$scope.cancelPreview = function(){
		angular.element("#previewMode").modal("hide");			
	}
	
    
	$('#myQueModal').on('shown.bs.modal', function () {
         $scope.showModal = true;
    });

    $('#myQueModal').on('hidden.bs.modal', function () {
        $scope.showModal = false;
        $scope.questionDetailObj.isRequired =false;
        $scope.questionDetailObj.name = '';
        $scope.questionDetailObj.title = '';
        $scope.questionDetailObj.id = '';
    });

});