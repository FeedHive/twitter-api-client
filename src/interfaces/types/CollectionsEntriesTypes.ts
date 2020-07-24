export default interface CollectionsEntries {
  objects: Objects;
}

export interface Objects {
  timelines: Timelines;
  tweets: Tweets;
  response: Response;
}

export interface Response {
  position: Position;
  timeline: Timeline[];
  timeline_id: string;
}

export interface Timeline {
  feature_context: string;
  tweet: Tweet;
}

export interface Tweet {
  id: string;
  sort_index: string;
}

export interface Position {
  max_position: string;
  min_position: string;
  was_truncated: boolean;
}

export interface Tweets {
  '504032379045179393': _504032379045179393;
}

export interface _504032379045179393 {
  contributors?: any;
  coordinates?: any;
  created_at: string;
  entities: Entities;
  extended_entities: Extendedentities;
  favorite_count: number;
  favorited: boolean;
  geo?: any;
  id: number;
  id_str: string;
  in_reply_to_screen_name?: any;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  is_quote_status: boolean;
  lang: string;
  place?: any;
  possibly_sensitive: boolean;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  text: string;
  truncated: boolean;
  user: User;
}

export interface User {
  id: number;
  id_str: string;
}

export interface Extendedentities {
  media: Media[];
}

export interface Entities {
  hashtags: any[];
  media: Media[];
  symbols: any[];
  urls: any[];
  user_mentions: Usermention[];
}

export interface Usermention {
  id: number;
  id_str: string;
  indices: number[];
  name: string;
  screen_name: string;
}

export interface Media {
  display_url: string;
  expanded_url: string;
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  sizes: Sizes;
  type: string;
  url: string;
}

export interface Sizes {
  large: Large;
  medium: Large;
  small: Large;
  thumb: Large;
}

export interface Large {
  h: number;
  resize: string;
  w: number;
}

export interface Timelines {
  'custom-539487832448843776': Custom539487832448843776;
}

export interface Custom539487832448843776 {
  collection_type: string;
  collection_url: string;
  description: string;
  name: string;
  timeline_order: string;
  url: string;
  user_id: string;
  visibility: string;
}

