package com.me.portfolio.control;

public class BasicInformationDTO {

    private String firstName;
    private String lastName;
    private String description;
    private String age;
    private String email;
    private String address;
    private String phone;
    private String[] languages;
    
    
    public BasicInformationDTO(String firstName, String lastName, String description, String age, String email, String address,
            String phone, String[] languages) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.age = age;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.languages = languages;
    }

    public BasicInformationDTO() {
        
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
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
