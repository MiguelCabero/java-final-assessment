package com.java.assessment.springapp.services;

import com.java.assessment.springapp.models.User;
import com.java.assessment.springapp.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {

	@Autowired
	UserRepository userRepository;

	public List<User> getAll() {
		return userRepository.findAll();
	}

	Optional<User> getUser(Integer id) {
		return userRepository.findById(id);
	}

}
