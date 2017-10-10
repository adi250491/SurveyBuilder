package com.domain.Survey.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.domain.Survey.Entity.SurveyEntity;
import com.domain.Survey.Entity.User;
import com.domain.Survey.dao.ISurveyDAO;
import com.domain.Survey.model.Survey;

@Service
public class SurveyService implements ISurveyService {
	@Autowired
	private ISurveyDAO surveyDAO;
	
	public SurveyEntity getSurveyById(int articleId) {
		SurveyEntity obj = surveyDAO.getSurveyById(articleId);
		/**
		 * Code to return json in form of string to controller is pending
		 */
		return obj;
	}	
	
	public List<SurveyEntity> getAllSurvey(){
		return surveyDAO.getAllSurveys();
	}
	
	public String getCountOfSurvey(){
		return surveyDAO.getCountOfSurvey();
	}
	
	
	public synchronized boolean addSurvey(SurveyEntity article){
		/*ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
		String json = ow.writeValueAsString(object);*/
                /*if (surveyDAO.surveyExists(article.getTitle(), article.getCategory())) {
    	            return false;
                } else {
    	            surveyDAO.addSurvey(article);
    	            return true;
                }*/
		return false;
	}
	
	public void updateSurvey(SurveyEntity article) {
		surveyDAO.updateSurvey(article);
	}
	
	public void deleteSurvey(int articleId) {
		surveyDAO.deleteSurvey(articleId);
	}

	public User findUserByEmail(String email) {
		return surveyDAO.findUserByEmail(email);
	}

	public void saveSurvey(Survey survey,String surveyName,String surveyDesc) {
		surveyDAO.saveSurvey( survey, surveyName, surveyDesc);
		
	}

	@Override
	public String validateUser(String email) {
		String password=surveyDAO.validateUser(email); 
		return password;
	}
	
} 
