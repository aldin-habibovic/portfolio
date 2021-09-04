package com.me.portfolio.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.me.portfolio.control.ProfileDTO;
import com.me.portfolio.control.ProfileService;
import com.me.portfolio.model.Profile;

@RestController
@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class PortfolioController {

    @Autowired
    private ProfileService profileService;

    @GetMapping(value = "/read", consumes = { MediaType.ALL_VALUE })
    public ProfileDTO readProfile() {
        return this.profileService.getProfileByName("aldin");
    }

    @PostMapping(value = "/create")
    public Profile createProfile(@RequestBody Profile profile) {
        return profile;
    }

    @PutMapping(value = "/update")
    public Profile updateProfile(@RequestBody ProfileDTO profileDTO) {
        return this.profileService.updateProfile(profileDTO);
    }

}
