export default interface TrendsPlace {
  trends: Trend[];
  as_of: string;
  created_at: string;
  locations: Location[];
}

export interface Location {
  name: string;
  woeid: number;
}

export interface Trend {
  name: string;
  url: string;
  promoted_content?: any;
  query: string;
  tweet_volume?: number;
}

