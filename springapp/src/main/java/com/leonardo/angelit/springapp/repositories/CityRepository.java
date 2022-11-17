package com.leonardo.angelit.springapp.repositories;

import com.leonardo.angelit.springapp.models.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;



@Component
public interface CityRepository extends JpaRepository<City, Integer> {

}
