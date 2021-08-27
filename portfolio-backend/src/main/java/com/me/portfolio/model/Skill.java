package com.me.portfolio.model;

import org.springframework.data.annotation.Id;

public class Skill {

    @Id
    private String id;
    
    private String name;
    private String progress; 
    
    public Skill() {
        
    }

    public Skill(String name, String progress) {
        super();
        this.name = name;
        this.progress = progress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
    
    
    
}
