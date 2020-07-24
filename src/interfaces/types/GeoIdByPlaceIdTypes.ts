export default interface GeoIdByPlaceId {
  id: string;
  url: string;
  place_type: string;
  name: string;
  full_name: string;
  country_code: string;
  country: string;
  contained_within: Containedwithin[];
  geometry?: any;
  polylines: any[];
  centroid: number[];
  bounding_box: Boundingbox;
  attributes: Attributes2;
}

export interface Attributes2 {
  geotagCount: string;
  '162834:id': string;
}

export interface Containedwithin {
  id: string;
  url: string;
  place_type: string;
  name: string;
  full_name: string;
  country_code: string;
  country: string;
  centroid: number[];
  bounding_box: Boundingbox;
  attributes: Attributes;
}

export interface Attributes {
}

export interface Boundingbox {
  type: string;
  coordinates: number[][][];
}

