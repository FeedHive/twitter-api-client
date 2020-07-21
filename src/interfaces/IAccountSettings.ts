export default interface IAccountSettings {
  always_use_https: boolean;
  discoverable_by_email: boolean;
  geo_enabled: boolean;
  language: string;
  protected: boolean;
  screen_name: string;
  show_all_inline_media: boolean;
  sleep_time: SleepTime;
  time_zone: TimeZone;
  trend_location: TrendLocation[];
  use_cookie_personalization: boolean;
  allow_contributor_request: string;
}

export interface SleepTime {
  enabled: boolean;
  end_time?: any;
  start_time?: any;
}

export interface TimeZone {
  name: string;
  tzinfo_name: string;
  utc_offset: number;
}

export interface PlaceType {
  code: number;
  name: string;
}

export interface TrendLocation {
  country: string;
  countryCode: string;
  name: string;
  parentid: number;
  placeType: PlaceType;
  url: string;
  woeid: number;
}
