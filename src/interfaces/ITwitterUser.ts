export default interface ITwitterUser {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  url: string;
  description: string;
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
  lang?: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url?: any;
  profile_background_image_url_https?: any;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  can_media_tag: boolean;
  followed_by: boolean;
  following: boolean;
  live_following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  muting: boolean;
  blocking: boolean;
  blocked_by: boolean;
  translator_type: string;
}

export interface ITwitterListResult {
  users: ITwitterUser[];
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
  total_count?: any;
}

export interface ITwitterIdListResult {
  ids: string[];
  next_cursor: number;
  next_cursor_str: string;
  previous_cursor: number;
  previous_cursor_str: string;
  total_count?: any;
}