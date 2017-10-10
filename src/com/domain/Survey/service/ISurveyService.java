package com.domain.Survey.service;

import java.util.List;

import com.domain.Survey.Entity.SurveyEntity;
import com.domain.Survey.Entity.User;
import com.domain.Survey.model.Survey;

public interface ISurveyService {


	     List<SurveyEntity> getAllSurvey();
	     SurveyEntity getSurveyById(int articleId);
	     boolean addSurvey(SurveyEntity article);
	     void updateSurvey(SurveyEntity article);
	     void deleteSurvey(int articleId);
	     User findUserByEmail(String email);
	     void saveSurvey(Survey survey,String surveyName,String surveyDesc);
	     String getCountOfSurvey();
		String validateUser(String email);
	     }

