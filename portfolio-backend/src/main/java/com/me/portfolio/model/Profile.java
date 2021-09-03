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
    private String address;
    private String phone;
    private String[] languages;

    private List<Education> educations;
    private List<Skill> skils;
    
    public Profile() {

    }

    public Profile(String firstName, String lastName, String email, String age, String address, String phone,
            String[] languages, List<Education> educations, List<Skill> skils) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.languages = languages;
        this.educations = educations;
        this.skils = skils;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String[] getLanguages() {
        return languages;
    }

    public void setLanguages(String[] languages) {
        this.languages = languages;
    }

}
