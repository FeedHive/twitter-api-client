export default interface StatusesMentionsTimeline {
  coordinates?: Coordinate;
  favorited: boolean;
  truncated: boolean;
  created_at: string;
  id_str: string;
  entities: Entities;
  in_reply_to_user_id_str?: string;
  contributors?: any;
  text: string;
  retweet_count: number;
  in_reply_to_status_id_str?: any;
  id: number;
  geo?: Coordinate;
  retweeted: boolean;
  in_reply_to_user_id?: number;
  place?: any;
  user: User;
  in_reply_to_screen_name?: string;
  source: string;
  in_reply_to_status_id?: any;
}

export interface User {
  profile_sidebar_fill_color: string;
  profile_sidebar_border_color: string;
  profile_background_tile: boolean;
  name: string;
  profile_image_url: string;
  created_at: string;
  location: string;
  follow_request_sent: boolean;
  profile_link_color: string;
  is_translator: boolean;
  id_str: string;
  entities: Entities2;
  default_profile: boolean;
  contributors_enabled: boolean;
  favourites_count: number;
  url: string;
  profile_image_url_https: string;
  utc_offset: number;
  id: number;
  profile_use_background_image: boolean;
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
  time_zone: string;
  description: string;
  default_profile_image: boolean;
  profile_background_image_url: string;
  statuses_count: number;
  friends_count: number;
  following?: any;
  show_all_inline_media: boolean;
  screen_name: string;
}

export interface Entities2 {
  url: Url2;
  description: Description;
}

export interface Description {
  urls: any[];
}

export interface Url2 {
  urls: Url[];
}

export interface Url {
  expanded_url?: any;
  url: string;
  indices: number[];
}

export interface Entities {
  urls: any[];
  hashtags: Hashtag[];
  user_mentions: Usermention[];
}

export interface Usermention {
  name: string;
  id_str: string;
  id: number;
  indices: number[];
  screen_name: string;
}

export interface Hashtag {
  text: string;
  indices: number[];
}

export interface Coordinate {
  coordinates: number[];
  type: string;
}

