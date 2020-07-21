import ITwitterUser from './ITwitterUser';

export default interface ITweet {
  created_at: string;
  id: number;
  id_str: string;
  full_text: string;
  truncated: boolean;
  entities: Entities;
  source: string;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: ITwitterUser;
  geo?: any;
  coordinates?: any;
  place?: any;
  contributors?: any;
  retweeted_status: RetweetedStatus;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  lang: string;
}

export interface UserMention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

export interface Entities {
  hashtags: any[];
  symbols: any[];
  user_mentions: UserMention[];
  urls: any[];
}

export interface Url2 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Url {
  urls: Url2[];
}

export interface Description {
  urls: any[];
}

export interface Entities2 {
  url: Url;
  description: Description;
}

export interface Url3 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Entities3 {
  hashtags: any[];
  symbols: any[];
  user_mentions: any[];
  urls: Url3[];
}

export interface Url5 {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export interface Url4 {
  urls: Url5[];
}

export interface Description2 {
  urls: any[];
}

export interface Entities4 {
  url: Url4;
  description: Description2;
}

export interface RetweetedStatus {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities3;
  source: string;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: ITwitterUser;
  geo?: any;
  coordinates?: any;
  place?: any;
  contributors?: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  lang: string;
}
