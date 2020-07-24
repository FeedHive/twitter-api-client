export default interface TrendsAvailable {
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

