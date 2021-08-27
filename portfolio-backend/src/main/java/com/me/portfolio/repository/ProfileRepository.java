package com.me.portfolio.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.me.portfolio.model.Profile;

public interface ProfileRepository extends MongoRepository<Profile, String> {
    
    public Profile findByFirstName(String firstName);
    
}
