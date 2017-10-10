package com.domain.Survey.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Entity
@Table(name = "org_admin_master")
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonDeserialize
public class SyrveyTestBean {
	@GenericGenerator(name = "g1", strategy = "increment")
	@Id
	@GeneratedValue(generator = "g1")
	private Integer saId;
	private String firstName, lstName, address, gender, mobileNum, emailId;

}
