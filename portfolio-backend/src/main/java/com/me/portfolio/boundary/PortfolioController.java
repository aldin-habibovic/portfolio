package com.me.portfolio.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.me.portfolio.model.Profile;
import com.me.portfolio.repository.ProfileRepository;

@RestController
public class PortfolioController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping(value = "/read", consumes = "application/json", produces = "application/json")
    public Profile index() {
        return profileRepository.findByFirstName("Aldin");
    }

    @PostMapping(value = "/create", consumes = "application/json", produces = "application/json")
    public Profile savePortfolio(@RequestBody Profile profile) {
        return profile;
    }

}
