'use strict';
var app = angular.module('myModalApp',['ngRoute','ngMaterial', 'jkAngularRatingStars', 'ui.grid']);

/*
app.config(function($routeProvider) {
    $routeProvider
	.when("/createsurvey.html", {
        templateUrl : "js/modules/Survey/app-modal.template.html",
        controller : "appModalController"
    })
	.when("/SurveyList.html", {
        templateUrl : "js/modules/Survey/app-suvshow.template.html",
        controller : "appSuvListController"
    })
    .otherwise({ redirectTo: '/' });
   
});*/


app.config(function($routeProvider) {
    $routeProvider
	.when("/createsurvey", {
        templateUrl : "js/modules/Survey/app-modal.template.html",
        controller : "appModalController"
    })
	.when("/SurveyList", {
        templateUrl : "js/modules/Survey/app-suvshow.template.html",
        controller : "appSuvListController"
    })
	.when("/ShareOfSurvey", {
        templateUrl : "js/modules/Survey/app-sharepreview.template.html",
        controller : "appSharePreviewController"
    })
    .otherwise({ redirectTo: '/' });
   
});