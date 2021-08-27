package com.me.portfolio.model;

import org.springframework.data.annotation.Id;

public class Education {

    @Id
    public String id;
    
    private String level;
    private String university;
    private String degreeCourse;
    private String description;

    public Education() {
        
    }

    public Education(String level, String university, String degreeCourse, String description) {
        super();
        this.level = level;
        this.university = university;
        this.degreeCourse = degreeCourse;
        this.description = description;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getDegreeCourse() {
        return degreeCourse;
    }

    public void setDegreeCourse(String degreeCourse) {
        this.degreeCourse = degreeCourse;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
}
