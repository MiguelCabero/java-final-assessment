package com.leonardo.angelit.springapp.controllers;

import com.leonardo.angelit.springapp.models.City;
import com.leonardo.angelit.springapp.services.CityService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class CityController {

    @Autowired
    CityService cityService;

    @GetMapping(path = "api/cities")
    public ResponseEntity<List<City>> getCities() {

        return new ResponseEntity<>(cityService.getAll(),
                HttpStatus.OK);

    }

}
