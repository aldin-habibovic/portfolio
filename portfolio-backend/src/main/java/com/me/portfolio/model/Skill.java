package com.me.portfolio.model;

import org.springframework.data.annotation.Id;

public class Skill {

    @Id
    private String id;
    
    private String name;
    private String progress; 
    private String filename;
    
    public Skill() {
        
    }

    public Skill(String name, String progress, String filename) {
        super();
        this.name = name;
        this.progress = progress;
        this.filename = filename;
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

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }
    
}
