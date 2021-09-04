package com.me.portfolio.control;

import java.util.List;

public class ProfileDTO {

    public String id;
    
    private String profileName; 
    
    private BasicInformationDTO basicInformation;
    private List<EducationDTO> educations;
    private List<SkillDTO> skils;
    
    public ProfileDTO() {

    }

    public ProfileDTO(String profilName, BasicInformationDTO basicInformation, List<EducationDTO> educations, List<SkillDTO> skils) {
        super();
        this.profileName = profilName;
        this.basicInformation = basicInformation;
        this.educations = educations;
        this.skils = skils;
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    
    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public BasicInformationDTO getBasicInformation() {
        return basicInformation;
    }

    public void setBasicInformation(BasicInformationDTO basicInformation) {
        this.basicInformation = basicInformation;
    }

    public List<EducationDTO> getEducations() {
        return educations;
    }

    public void setEducations(List<EducationDTO> educations) {
        this.educations = educations;
    }

    public List<SkillDTO> getSkils() {
        return skils;
    }

    public void setSkils(List<SkillDTO> skils) {
        this.skils = skils;
    }
    
}
