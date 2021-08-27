package com.me.portfolio.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "portfolio")
public class Profile {

    @Id
    public String id;
    
    private String firstName;
    private String lastName;
    private String email;
    private String age;

    private List<Education> educations;
    private List<Skill> skils;
    
    public Profile() {

    }

    public Profile(String firstName, String lastName, String email, String age) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public List<Education> getEducations() {
        return educations;
    }

    public void setEducations(List<Education> educations) {
        this.educations = educations;
    }

    public List<Skill> getSkils() {
        return skils;
    }

    public void setSkils(List<Skill> skils) {
        this.skils = skils;
    }

}
