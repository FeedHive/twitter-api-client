import { doGetRequest, doPostRequest } from '../base/base';
import { createParams } from '../utils/utils';

import {
  GeoIdByPlaceIdParams,
} from '../interfaces/params/GetInformationAboutAPlaceParams';

import GeoIdByPlaceId from '../interfaces/types/GeoIdByPlaceIdTypes';
import GeoReverseGeocode from '../interfaces/types/GeoReverseGeocodeTypes';
import GeoSearch from '../interfaces/types/GeoSearchTypes';

class GeoClient {
  /**
   *  Returns all the information about a known place.
   *
   * @link https://developer.twitter.com/en/docs/geo/place-information/api-reference/get-geo-id-place_id
   * @param parameters
   */
  public async geoIdByPlaceId(parameters: GeoIdByPlaceIdParams) {
    const params = createParams(parameters);
    return await doGetRequest<GeoIdByPlaceId>('https://api.twitter.com/1.1/geo/id/:place_id.json' + params);
  }

  /**
   *  Given a latitude and a longitude, searches for up to 20 places that can be used as a place_id when updating a status.This request is an informative call and will deliver generalized results about geography.
   *
   * @link https://developer.twitter.com/en/docs/geo/places-near-location/api-reference/get-geo-reverse_geocode
   */
  public async geoReverseGeocode() {
    return await doGetRequest<GeoReverseGeocode>('https://api.twitter.com/1.1/geo/reverse_geocode.json');
  }

  /**
   *  Search for places that can be attached to a Tweet via POST statuses/update. Given a latitude and a longitude pair, an IP address, or a name, this request will return a list of all the valid places that can be used as the place_id when updating a status.Conceptually, a query can be made from the user's location, retrieve a list of places, have the user validate the location they are at, and then send the ID of this location with a call to POST statuses/update.This is the recommended method to use find places that can be attached to statuses/update. Unlike GET geo/reverse_geocode which provides raw data access, this endpoint can potentially re-order places with regards to the user who is authenticated. This approach is also preferred for interactive place matching with the user.Some parameters in this method are only required based on the existence of other parameters. For instance, "lat" is required if "long" is provided, and vice-versa. Authentication is recommended, but not required with this method.
   *
   * @link https://developer.twitter.com/en/docs/geo/places-near-location/api-reference/get-geo-search
   */
  public async geoSearch() {
    return await doGetRequest<GeoSearch>('https://api.twitter.com/1.1/geo/search.json');
  }

}

export default GeoClient;
