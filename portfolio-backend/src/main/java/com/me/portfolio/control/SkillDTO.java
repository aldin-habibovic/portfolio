package com.me.portfolio.control;

public class SkillDTO {
    
    private String id;
    
    private String name;
    private String progress; 
    
    public SkillDTO() {
        
    }

    public SkillDTO(String name, String progress) {
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
