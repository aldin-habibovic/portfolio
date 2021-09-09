package com.me.portfolio.control;

public class SkillDTO {
    
    private String id;
    
    private String name;
    private String progress; 
    private String filename;
    
    public SkillDTO() {
        
    }

    public SkillDTO(String name, String progress, String filename) {
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
