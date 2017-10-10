package com.domain.Survey.dao;

import com.domain.Survey.Entity.User;

public interface IUserRepositoryDAO {
	
	User findByUsername(String username);

}
