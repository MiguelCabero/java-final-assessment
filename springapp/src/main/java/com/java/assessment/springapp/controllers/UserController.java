package com.java.assessment.springapp.controllers;

import com.java.assessment.springapp.models.User;
import com.java.assessment.springapp.services.UserService;
import java.text.ParseException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping(path = "api/users/{id}")
    public ResponseEntity<User> getUsers(@PathVariable Integer id) throws NotFoundException {

        User user = userService.getUser(id);

        return new ResponseEntity<>(user,
                HttpStatus.OK);

    }

    @PostMapping(path = "/api/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PutMapping(path = "/api/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user)
            throws NotFoundException {

        return new ResponseEntity<>(userService.updateUser(id, user), HttpStatus.OK);
    }

    @DeleteMapping(path = "/api/users/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Integer id) {

        userService.delete(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
