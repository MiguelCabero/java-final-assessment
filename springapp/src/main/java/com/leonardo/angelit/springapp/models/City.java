package com.leonardo.angelit.springapp.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity(name = "cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "airline_id")
    private Integer airlineId;

    private String name;

    private String country;


    public City() {
    }

    public City(Integer id, Integer airlineId, String name,
            String country) {

        this.id = id;
        this.name = name;
        this.airlineId = airlineId;
        this.country = country;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getAirlineId() {
        return airlineId;
    }

    public void setAirlineId(Integer airlineId) {
        this.airlineId = airlineId;
    }

    @Override
    public String toString() {
        return "City [id=" + id + ", name=" + name + ", country="
                + country + ", airlineId=" + airlineId + "]";
    }

}
