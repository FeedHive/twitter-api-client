export default interface CollectionsCreate {
  response: Response;
  objects: Objects;
}

export interface Objects {
  users: Users;
  timelines: Timelines;
}

export interface Timelines {
  'custom-390882285743898624': Custom390882285743898624;
}

export interface Custom390882285743898624 {
  name: string;
  user_id: string;
}

export interface Users {
  '119476949': _119476949;
}

export interface _119476949 {
  profile_sidebar_fill_color: string;
  profile_sidebar_border_color: string;
  profile_background_tile?: any;
  name: string;
  profile_image_url: string;
  created_at: string;
  location: string;
  follow_request_sent?: any;
  profile_link_color: string;
  is_translator: boolean;
  id_str: string;
  default_profile: boolean;
  contributors_enabled: boolean;
  favourites_count: number;
  url: string;
  profile_image_url_https: string;
  utc_offset?: any;
  id: number;
  profile_use_background_image?: any;
  listed_count: number;
  profile_text_color: string;
  lang: string;
  followers_count: number;
  protected: boolean;
  notifications?: any;
  profile_background_image_url_https: string;
  profile_background_color: string;
  verified: boolean;
  geo_enabled: boolean;
  time_zone?: any;
  description: string;
  default_profile_image: boolean;
  profile_background_image_url: string;
  statuses_count: number;
  friends_count: number;
  following?: any;
  screen_name: string;
  counts: Counts;
}

export interface Counts {
  lists: Lists;
  saved_searches: number;
}

export interface Lists {
  owned?: any;
  subscribed?: any;
}

export interface Response {
  timeline_id: string;
}

