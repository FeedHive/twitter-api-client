export default interface AccountSettings {
  always_use_https: boolean;
  discoverable_by_email: boolean;
  geo_enabled: boolean;
  language: string;
  protected: boolean;
  screen_name: string;
  show_all_inline_media: boolean;
  sleep_time: Sleeptime;
  time_zone: Timezone;
  trend_location: Trendlocation[];
  use_cookie_personalization: boolean;
  allow_contributor_request: string;
}

export interface Trendlocation {
  country: string;
  countryCode: string;
  name: string;
  parentid: number;
  placeType: PlaceType;
  url: string;
  woeid: number;
}

export interface PlaceType {
  code: number;
  name: string;
}

export interface Timezone {
  name: string;
  tzinfo_name: string;
  utc_offset: number;
}

export interface Sleeptime {
  enabled: boolean;
  end_time?: any;
  start_time?: any;
}

