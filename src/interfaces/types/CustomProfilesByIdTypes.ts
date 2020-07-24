export default interface CustomProfilesById {
  custom_profile: Customprofile;
}

export interface Customprofile {
  id: string;
  created_timestamp: string;
  name: string;
  avatar: Avatar;
}

export interface Avatar {
  media: Media;
}

export interface Media {
  url: string;
}

