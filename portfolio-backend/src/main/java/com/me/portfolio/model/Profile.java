package com.me.portfolio.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "portfolio")
public class Profile {

    @Id
    public String id;
    private String profileName; 
    
    private BasicInformation basicInfos;
    private List<Education> educations;
    private List<Skill> skils;

    public Profile() {

    }

    public Profile(String profileName, BasicInformation basicInfos, List<Education> educations, List<Skill> skils) {
        super();
        this.profileName = profileName;
        this.basicInfos = basicInfos;
        this.educations = educations;
        this.skils = skils;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public BasicInformation getBasicInfos() {
        return basicInfos;
    }

    public void setBasicInfos(BasicInformation basicInfos) {
        this.basicInfos = basicInfos;
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
