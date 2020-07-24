export default interface ListsSubscriptions {
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
  lists: List[];
}

export interface List {
  id: number;
  id_str: string;
  name: string;
  uri: string;
  subscriber_count: number;
  member_count: number;
  mode: string;
  description: string;
  slug: string;
  full_name: string;
  created_at: string;
  following: boolean;
  user: User;
}

export interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url?: any;
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
  translator_type: string;
}

export interface Entities {
  description: Description;
}

export interface Description {
  urls: any[];
}

