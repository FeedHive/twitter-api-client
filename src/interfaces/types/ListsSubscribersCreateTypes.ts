export default interface ListsSubscribersCreate {
  created_at: string;
  slug: string;
  name: string;
  full_name: string;
  description: string;
  mode: string;
  following: boolean;
  user: User;
  member_count: number;
  id_str: string;
  subscriber_count: number;
  id: number;
  uri: string;
}

export interface User {
  geo_enabled: boolean;
  profile_background_color: string;
  protected: boolean;
  profile_background_tile: boolean;
  created_at: string;
  profile_image_url_https: string;
  name: string;
  favourites_count: number;
  profile_sidebar_fill_color: string;
  default_profile_image: boolean;
  notifications: boolean;
  utc_offset: number;
  description: string;
  display_url?: any;
  deactivated_bit: boolean;
  statuses_count: number;
  following: boolean;
  verified: boolean;
  profile_sidebar_border_color: string;
  followers_count: number;
  profile_image_url: string;
  contributors_enabled: boolean;
  follow_request_sent: boolean;
  profile_use_background_image: boolean;
  location: string;
  id_str: string;
  is_translator: boolean;
  show_all_inline_media: boolean;
  profile_text_color: string;
  screen_name: string;
  profile_background_image_url: string;
  url: string;
  expanded_url?: any;
  default_profile: boolean;
  profile_background_image_url_https: string;
  time_zone: string;
  profile_link_color: string;
  id: number;
  entities: Entities;
  suspended: boolean;
  listed_count: number;
  lang: string;
  friends_count: number;
}

export interface Entities {
  urls: any[];
  user_mentions: any[];
  hashtags: any[];
}

