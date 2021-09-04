package com.me.portfolio.control;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.me.portfolio.model.Education;
import com.me.portfolio.model.Profile;
import com.me.portfolio.model.Skill;
import com.me.portfolio.repository.ProfileRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public ProfileDTO getProfileByName(final String name) {
        final Profile profile = this.profileRepository.findByFirstName(name);
        return convertToProfileDTO(profile);
    }

    public Profile updateProfile(final ProfileDTO profileDTO) {
        final Profile profile = convertToProfile(profileDTO);
        return this.profileRepository.save(profile);
    }
    
    private Profile convertToProfile(ProfileDTO profileDTO) {
        Profile profile = new Profile();

        profile.setFirstName(profileDTO.getFirstName());
        profile.setLastName(profileDTO.getLastName());
        profile.setAddress(profileDTO.getAddress());
        profile.setAge(profileDTO.getAge());
        profile.setEmail(profileDTO.getEmail());
        profile.setPhone(profileDTO.getPhone());
        profile.setLanguages(profileDTO.getLanguages());

        profile.setEducations(
                profileDTO.getEducations().stream().map(this::convertToEducation).collect(Collectors.toList()));

        profile.setSkils((profileDTO.getSkils().stream().map(this::convertToSkill).collect(Collectors.toList())));

        return profile;
    }
    
    private Education convertToEducation(EducationDTO educationDTO) {
        return new Education(educationDTO.getLevel(), educationDTO.getUniversity(), educationDTO.getDegreeCourse(),
                educationDTO.getDegreeCourse());
    }

    private Skill convertToSkill(SkillDTO skillDTO) {
        return new Skill(skillDTO.getName(), skillDTO.getProgress());
    }
    
    private ProfileDTO convertToProfileDTO(Profile profile) {
        ProfileDTO profileDTO = new ProfileDTO();

        profileDTO.setFirstName(profile.getFirstName());
        profileDTO.setLastName(profile.getLastName());
        profileDTO.setAddress(profile.getAddress());
        profileDTO.setAge(profile.getAge());
        profileDTO.setEmail(profile.getEmail());
        profileDTO.setPhone(profile.getPhone());
        profileDTO.setLanguages(profile.getLanguages());

        profileDTO.setEducations(
                profile.getEducations().stream().map(this::convertToEducationDTO).collect(Collectors.toList()));

        profileDTO.setSkils((profile.getSkils().stream().map(this::convertToSkillDTO).collect(Collectors.toList())));

        return profileDTO;
    }

    private EducationDTO convertToEducationDTO(Education education) {
        return new EducationDTO(education.getLevel(), education.getUniversity(), education.getDegreeCourse(),
                education.getDegreeCourse());
    }

    private SkillDTO convertToSkillDTO(Skill skill) {
        return new SkillDTO(skill.getName(), skill.getProgress());
    }
}
