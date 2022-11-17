package com.leonardo.angelit.springapp.services;

import com.leonardo.angelit.springapp.models.City;
import com.leonardo.angelit.springapp.repositories.CityRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CityService {

	@Autowired
	CityRepository cityRepository;

	public List<City> getAll() {
		return cityRepository.findAll();
	}

	Optional<City> getCity(Integer id) {
		return cityRepository.findById(id);
	}

}
