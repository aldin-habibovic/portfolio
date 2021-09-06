package com.me.portfolio.control;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.me.portfolio.model.BasicInformation;
import com.me.portfolio.model.Education;
import com.me.portfolio.model.Profile;
import com.me.portfolio.model.Skill;
import com.me.portfolio.repository.ProfileRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public ProfileDTO getProfileByName(final String name) {
        final Profile profile = this.profileRepository.findByProfileName(name);
        return convertToProfileDTO(profile);
    }

    public Profile updateProfile(final ProfileDTO profileDTO) {
        final Profile profile = convertToProfile(profileDTO);
        return this.profileRepository.save(profile);
    }

    private Profile convertToProfile(ProfileDTO profileDTO) {
        Profile profile = new Profile();
        
        profile.setProfileName(profileDTO.getProfileName());
        
        final BasicInformationDTO basicInfos = profileDTO.getBasicInformation();
        final BasicInformation basicInformation = new BasicInformation(basicInfos.getFirstName(),
                basicInfos.getLastName(), basicInfos.getDescription(), basicInfos.getAge(), basicInfos.getEmail(), basicInfos.getAddress(),
                basicInfos.getPhone(), basicInfos.getLanguages());

        profile.setBasicInfos(basicInformation);

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

        profileDTO.setProfileName(profile.getProfileName());
        
        final BasicInformation basicInfos = profile.getBasicInfos();
        BasicInformationDTO basicInformation = new BasicInformationDTO(basicInfos.getFirstName(),
                basicInfos.getLastName(), basicInfos.getDescription(), basicInfos.getAge(), basicInfos.getEmail(), basicInfos.getAddress(),
                basicInfos.getPhone(), basicInfos.getLanguages());

        profileDTO.setBasicInformation(basicInformation);

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
