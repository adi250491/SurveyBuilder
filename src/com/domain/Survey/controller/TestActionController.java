package com.domain.Survey.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestActionController {
	
	@RequestMapping(value="/getTestClass",method=RequestMethod.GET,headers = "Accept=application/json")
	public String getTestClass(){
		System.out.println("Inside :::::::::::");
		return null;
	}

}
