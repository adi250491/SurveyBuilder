package com.domain.Survey.Entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "survey")
public class SurveyEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "survey_id")
	private int surveyID;

	@Column(name = "survey_fields_json")
	private String surveyFieldsJSON;

	@Column(name = "survey_type")
	private String surveyType;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "created_by")
	private String createdBy;

	@Column(name = "last_modified_by")
	private String modifiedBy;

	@Column(name = "last_modified_date")
	private String lastModifiedDate;
	
	@Column(name = "survey_description")
	private String surveyDesc;
	
	

	/*
	 * @Column(name = "isActive") private String isActive;
	 */

	/*
	 * public String getCreatedDate() { return createdDate; }
	 * 
	 * public void setCreatedDate(String createdDate) { this.createdDate =
	 * createdDate; }
	 */
	/*
	 * public String getCreatedBy() { return createdBy; }
	 * 
	 * public void setCreatedBy(String createdBy) { this.createdBy = createdBy;
	 * }
	 */

	/*
	 * public String getModifiedBy() { return modifiedBy; }
	 * 
	 * public void setModifiedBy(String modifiedBy) { this.modifiedBy =
	 * modifiedBy; }
	 * 
	 * public String getLastModifiedDate() { return lastModifiedDate; }
	 * 
	 * public void setLastModifiedDate(String lastModifiedDate) {
	 * this.lastModifiedDate = lastModifiedDate; }
	 */
	/*
	 * public String getIsActive() { return isActive; }
	 * 
	 * public void setIsActive(String isActive) { this.isActive = isActive; }
	 */

	public String getSurveyDesc() {
		return surveyDesc;
	}

	public void setSurveyDesc(String surveyDesc) {
		this.surveyDesc = surveyDesc;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public int getSurveyID() {
		return surveyID;
	}

	public void setSurveyID(int surveyID) {
		this.surveyID = surveyID;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public String getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(String lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	public String getSurveyFieldsJSON() {
		return surveyFieldsJSON;
	}

	public void setSurveyFieldsJSON(String surveyFieldsJSON) {
		this.surveyFieldsJSON = surveyFieldsJSON;
	}

	public String getSurveyType() {
		return surveyType;
	}

	public void setSurveyType(String surveyType) {
		this.surveyType = surveyType;
	}

}