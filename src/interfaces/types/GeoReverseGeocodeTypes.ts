export default interface GeoReverseGeocode {
  query: Query;
  result: Result;
}

export interface Result {
  places: Place[];
}

export interface Place {
  attributes: Attributes;
  bounding_box?: Boundingbox;
  contained_within: (Containedwithin | Containedwithin2)[];
  country: string;
  country_code: string;
  full_name: string;
  id: string;
  name: string;
  place_type: string;
  url: string;
}

export interface Containedwithin2 {
  attributes: Attributes;
  bounding_box: Boundingbox;
  country: string;
  country_code: string;
  full_name: string;
  id: string;
  name: string;
  place_type: string;
  url: string;
}

export interface Containedwithin {
  attributes: Attributes;
  bounding_box?: any;
  country: string;
  country_code: string;
  full_name: string;
  id: string;
  name: string;
  place_type: string;
  url: string;
}

export interface Boundingbox {
  coordinates: number[][][];
  type: string;
}

export interface Attributes {
}

export interface Query {
  params: Params;
  type: string;
  url: string;
}

export interface Params {
  accuracy: number;
  coordinates: Coordinates;
  granularity: string;
}

export interface Coordinates {
  coordinates: number[];
  type: string;
}

