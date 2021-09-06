/* Generated by restful-react */

import React from "react";
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from "restful-react";
export const SPEC_VERSION = "2.0"; 
export interface BasicInformation {
  firstName?: string;
  lastName?: string;
  description?: string;
  age?: string;
  email?: string;
  address?: string;
  phone?: string;
  languages?: string[];
}

export interface Education {
  id?: string;
  level?: string;
  university?: string;
  degreeCourse?: string;
  description?: string;
}

export interface Profile {
  id?: string;
  profileName?: string;
  basicInfos?: BasicInformation;
  educations?: Education[];
  skils?: Skill[];
}

export interface Skill {
  name?: string;
  progress?: string;
}

export interface BasicInformationDTO {
  firstName?: string;
  lastName?: string;
  description?: string;
  age?: string;
  email?: string;
  address?: string;
  phone?: string;
  languages?: string[];
}

export interface EducationDTO {
  id?: string;
  level?: string;
  university?: string;
  degreeCourse?: string;
  description?: string;
}

export interface ProfileDTO {
  id?: string;
  profileName?: string;
  basicInformation?: BasicInformationDTO;
  educations?: EducationDTO[];
  skils?: SkillDTO[];
}

export interface SkillDTO {
  name?: string;
  progress?: string;
}

export type CreateProfileProps = Omit<MutateProps<Profile, unknown, void, Profile, void>, "path" | "verb">;

export const CreateProfile = (props: CreateProfileProps) => (
  <Mutate<Profile, unknown, void, Profile, void>
    verb="POST"
    path={`/create`}
    
    {...props}
  />
);

export type UseCreateProfileProps = Omit<UseMutateProps<Profile, unknown, void, Profile, void>, "path" | "verb">;

export const useCreateProfile = (props: UseCreateProfileProps) => useMutate<Profile, unknown, void, Profile, void>("POST", `/create`, props);


export type ReadProfileProps = Omit<GetProps<ProfileDTO, unknown, void, void>, "path">;

export const ReadProfile = (props: ReadProfileProps) => (
  <Get<ProfileDTO, unknown, void, void>
    path={`/read`}
    
    {...props}
  />
);

export type UseReadProfileProps = Omit<UseGetProps<ProfileDTO, unknown, void, void>, "path">;

export const useReadProfile = (props: UseReadProfileProps) => useGet<ProfileDTO, unknown, void, void>(`/read`, props);


export type UpdateProfileProps = Omit<MutateProps<Profile, unknown, void, ProfileDTO, void>, "path" | "verb">;

export const UpdateProfile = (props: UpdateProfileProps) => (
  <Mutate<Profile, unknown, void, ProfileDTO, void>
    verb="PUT"
    path={`/update`}
    
    {...props}
  />
);

export type UseUpdateProfileProps = Omit<UseMutateProps<Profile, unknown, void, ProfileDTO, void>, "path" | "verb">;

export const useUpdateProfile = (props: UseUpdateProfileProps) => useMutate<Profile, unknown, void, ProfileDTO, void>("PUT", `/update`, props);

