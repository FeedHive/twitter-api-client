export default interface BlocksCreate {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset?: any;
  time_zone?: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: string;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled?: any;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile?: any;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile?: any;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  muting: boolean;
  translator_type: string;
}

export interface Entities {
  url: Url2;
  description: Url2;
}

export interface Url2 {
  urls: Url[];
}

export interface Url {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

