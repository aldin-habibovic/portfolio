package com.me.portfolio;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.me.portfolio.model.Education;
import com.me.portfolio.model.Profile;
import com.me.portfolio.model.Skill;
import com.me.portfolio.repository.ProfileRepository;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Portfolio API", version = "2.0", description = "Profile Information"))
public class AccessingDataMongodbApplication implements CommandLineRunner {

    @Autowired
    private ProfileRepository repository;
    
    public static void main(String[] args) {
        SpringApplication.run(AccessingDataMongodbApplication.class, args);
    }
    
    @Override
    public void run(String... args) throws Exception {

        final Profile p = new Profile("Aldin", "Habibovic", "atest", "30");
        final Education education = new Education("High School", "MSS Sanski Most", "Electrotechnial", "tbd");
        final Education education1 = new Education("University of Bihac", "MSS Sanski Most", "Computerscheince", "tbd");
        p.setEducations(Arrays.asList(education, education1));
        
        final Skill skill1 = new Skill("HTML / CSS", "45%");
        final Skill skill2 = new Skill("Java", "65%");
        final Skill skill3 = new Skill("Typescript", "75%");
        final Skill skill4 = new Skill("Node Js", "30%");
        p.setSkils(Arrays.asList(skill1, skill2, skill3, skill4));
        
        this.repository.save(p);
        
        // fetch all profiles
        System.out.println("Profile found with findAll():");
        System.out.println("-------------------------------");
        for (Profile profile : repository.findAll()) {
          System.out.println(profile.getFirstName());
        }
        System.out.println();
        
    }

}
