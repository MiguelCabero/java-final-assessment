package com.java.assessment.springapp.services;

import com.java.assessment.springapp.models.User;
import com.java.assessment.springapp.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(Integer id) throws NotFoundException {
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()) {
            throw new NotFoundException();
        }

        return user.get();
    }

    public User updateUser(Integer id, User user) throws NotFoundException {
        Optional<User> selectedUser = userRepository.findById(id);
        if (!selectedUser.isPresent()) {
            throw new NotFoundException();
        }
        User tempUser = selectedUser.get();
        tempUser.setFirstName(user.getFirstName());
        tempUser.setLastName(user.getLastName());
        tempUser.setEmail(user.getEmail());
        tempUser.setPhoneNumber(user.getPhoneNumber());
        return userRepository.save(tempUser);
    }

    public void delete(Integer id) {
        userRepository.deleteById(id);
    }


}
