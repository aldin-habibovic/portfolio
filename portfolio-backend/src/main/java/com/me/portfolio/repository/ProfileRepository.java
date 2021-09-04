package com.me.portfolio.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.me.portfolio.model.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {
    
    public Profile findByProfileName(String profileName);
    
}
