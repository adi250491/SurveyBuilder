package com.domain.Survey.dao;

import java.util.List;

import com.domain.Survey.Entity.SurveyEntity;
import com.domain.Survey.Entity.User;
import com.domain.Survey.model.Survey;

public interface ISurveyDAO {

	
	// INTERFACE
	    List<SurveyEntity> getAllSurveys();
	    SurveyEntity getSurveyById(int surveyId);
	    void addSurvey(SurveyEntity survey);
	    void updateSurvey(SurveyEntity survey);
	    void deleteSurvey(int surveyId);
	    boolean surveyExists(String title, String category);
	    User findUserByEmail(String email);
	    void saveSurvey(Survey survey,String surveyName,String surveyDesc) ;
	    String getCountOfSurvey();
		String validateUser(String email);
	}

