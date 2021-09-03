package com.me.portfolio.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.me.portfolio.model.Profile;
import com.me.portfolio.repository.ProfileRepository;

@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class PortfolioController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping(value = "/read", consumes = { MediaType.ALL_VALUE })
    public Profile index() {
        return profileRepository.findByFirstName("Aldin");
    }

    @PostMapping(value = "/create")
    public Profile savePortfolio(@RequestBody Profile profile) {
        return profile;
    }

    @PutMapping(value = "/update")
    public Profile update(@RequestBody Profile profile) {
        return profileRepository.save(profile);
    }
    
}
