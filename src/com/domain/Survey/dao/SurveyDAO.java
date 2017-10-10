package com.domain.Survey.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.domain.Survey.Entity.SurveyEntity;
import com.domain.Survey.Entity.User;
import com.domain.Survey.model.Survey;

@Transactional
@Repository
public class SurveyDAO implements ISurveyDAO {

	@PersistenceContext
	private EntityManager entityManager;

	public SurveyEntity getSurveyById(int surveyId) {
		return entityManager.find(SurveyEntity.class, surveyId);
	}

	@SuppressWarnings("unchecked")
	public List<SurveyEntity> getAllSurveys() {
		String hql = "FROM SurveyEntity";
		return (List<SurveyEntity>) entityManager.createQuery(hql).getResultList();
	}

	public void addSurvey(SurveyEntity survey) {
		entityManager.persist(survey);
	}

	public void updateSurvey(SurveyEntity survey) {
		SurveyEntity artcl = getSurveyById(survey.getSurveyID());
		/*
		 * artcl.setTitle(survey.getIsActive());
		 * artcl.setCategory(survey.getSurveyJson());
		 */
		entityManager.flush();
	}

	public void deleteSurvey(int surveyId) {
		entityManager.remove(getSurveyById(surveyId));
	}

	public boolean surveyExists(String title, String category) {
		String hql = "FROM Survey as atcl WHERE atcl.title = ? and atcl.category = ?";
		int count = entityManager.createQuery(hql).setParameter(1, title).setParameter(2, category).getResultList()
				.size();
		return count > 0 ? true : false;
	}

	public User findUserByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	public void saveSurvey(Survey survey, String surveyName, String surveyDesc) {
		SurveyEntity surveyEntity = new SurveyEntity();
		if (survey != null) {
			surveyEntity.setSurveyType(survey.getSurveyType());
			surveyEntity.setSurveyDesc(survey.getSurveyDesc());
			surveyEntity.setSurveyFieldsJSON(survey.getSurveyJson());
			surveyEntity.setCreatedBy("admin");
			surveyEntity.setModifiedBy("admin");
		}
		entityManager.persist(surveyEntity);

	}

	public String getCountOfSurvey() {
		Query query = entityManager.createQuery("select count(*) from SurveyEntity");
		String count = query.getResultList().get(0).toString();
		return count;
	}

	@Override
	public String validateUser(String email) {
	
		List count = entityManager.createQuery("select password from user where user.mail = ?").setParameter(1, email).getResultList();
		String password = "";
		if (count != null) {
			//password = user.getPassword();
		}
		return password;
	}

}
