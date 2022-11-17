package com.java.assessment.springapp.controllers;

import com.java.assessment.springapp.models.User;
import com.java.assessment.springapp.services.UserService;
import java.text.ParseException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(path = "api/users")
    public ResponseEntity<List<User>> getUsers() {

        return new ResponseEntity<>(userService.getAll(),
                HttpStatus.OK);

    }

    @PostMapping(path = "/api/users")
    public ResponseEntity<User> getFinalPrice(@RequestBody User user)
            throws ParseException, ClassNotFoundException {

        final User savedUser = userService.saveUser(user);

        return new ResponseEntity<User>(savedUser, HttpStatus.OK);
    }

}
