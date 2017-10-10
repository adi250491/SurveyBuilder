package com.domain.Survey.controller;

import java.util.List;

import javax.persistence.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;

import com.domain.Survey.Entity.SurveyEntity;
import com.domain.Survey.Entity.User;
import com.domain.Survey.model.Survey;
import com.domain.Survey.service.ISurveyService;

@Controller
public class SurveyController {
	@Autowired
	private ISurveyService surveyService;

	@GetMapping("/")
	public String home1() {
		return "/index";
	}

	@GetMapping("/createSurvey")
	public String create(SurveyEntity survey) {
		return "/createsurvey";
	}

	@GetMapping("/index")
	public String index() {
		return "/index";
	}

	@GetMapping("/home")
	public String home() {
		return "/home";
	}

	@GetMapping("/admin")
	public String admin() {
		return "/admin";
	}

	@GetMapping("/user")
	public String user() {
		return "/user";
	}

	@GetMapping("/about")
	public String about() {
		return "/about";

	}

	@ModelAttribute(value = "myEntity")
	public User newUser()
	{
	    return new User();
	}
	@GetMapping("/login")
	public String login(@ModelAttribute("myEntity") User user, BindingResult result) {
		
		return "/adminlogin";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String adminHome(Model model,@RequestParam String mail,
			@RequestParam String password) {
		System.out.println("Inside acsdsd");
		String count = surveyService.getCountOfSurvey();
		model.addAttribute("surveys", count);
		return "/home";
	}

	@GetMapping("/403")
	public String error403() {
		return "/error/403";
	}

	@GetMapping("viewSurvey")
	public ResponseEntity<SurveyEntity> getSurveyEntityById(@PathVariable("id") int id) {
		SurveyEntity survey = surveyService.getSurveyById(id);
		return new ResponseEntity<SurveyEntity>(survey, HttpStatus.OK);
	}

	@GetMapping("adminSurvey")
	public String getAllSurveyEntitys(Model model) {
		List<SurveyEntity> list = surveyService.getAllSurvey();
		model.addAttribute("surveys", list);
		return "adminHome";
	}

	@PostMapping("survey")
	public ResponseEntity<Void> addSurveyEntity(@RequestBody SurveyEntity survey, UriComponentsBuilder builder) {
		boolean flag = surveyService.addSurvey(survey);
		if (flag == false) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/survey/{id}").buildAndExpand(survey.getSurveyID()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@DeleteMapping("survey/{id}")
	public ResponseEntity<Void> deleteSurveyEntity(@PathVariable("id") Integer id) {
		surveyService.deleteSurvey(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@ModelAttribute(value = "mySurvey")
	public Survey newEntity() {
		return new Survey();
	}

	@RequestMapping("saveSurvey")
	public Model saveSurvey(@ModelAttribute("mySurvey") Survey survey,
			@RequestParam(value = "surveyName") String surveyName,
			@RequestParam(value = "surveyDesc") String surveyDesc) {
		surveyService.saveSurvey(survey, surveyName, surveyDesc);
		return null;

	}
}