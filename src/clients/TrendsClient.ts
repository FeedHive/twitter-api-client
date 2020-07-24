import { doGetRequest, doPostRequest } from '../base/base';
import { createParams } from '../utils/utils';

import {
  TrendsClosestParams,
} from '../interfaces/params/GetLocationsWithTrendingTopicsParams';

import {
  TrendsPlaceParams,
} from '../interfaces/params/GetTrendsNearALocationParams';

import TrendsAvailable from '../interfaces/types/TrendsAvailableTypes';
import TrendsClosest from '../interfaces/types/TrendsClosestTypes';
import TrendsPlace from '../interfaces/types/TrendsPlaceTypes';

class TrendsClient {
  /**
   *  Returns the locations that Twitter has trending topic information for.The response is an array of "locations" that encode the location's WOEID and some other human-readable information such as a canonical name and country the location belongs in.A WOEID is a Yahoo! Where On Earth ID.
   *
   * @link https://developer.twitter.com/en/docs/trends/locations-with-trending-topics/api-reference/get-trends-available
   */
  public async trendsAvailable() {
    return await doGetRequest<TrendsAvailable[]>('https://api.twitter.com/1.1/trends/available.json');
  }

  /**
   *  Returns the locations that Twitter has trending topic information for, closest to a specified location.The response is an array of "locations" that encode the location's WOEID and some other human-readable information such as a canonical name and country the location belongs in.A WOEID is a Yahoo! Where On Earth ID.
   *
   * @link https://developer.twitter.com/en/docs/trends/locations-with-trending-topics/api-reference/get-trends-closest
   * @param parameters
   */
  public async trendsClosest(parameters: TrendsClosestParams) {
    const params = createParams(parameters);
    return await doGetRequest<TrendsClosest[]>('https://api.twitter.com/1.1/trends/closest.json' + params);
  }

  /**
   *  Returns the top 50 trending topics for a specific WOEID, if trending information is available for it.The response is an array of trend objects that encode the name of the trending topic, the query parameter that can be used to search for the topic on Twitter Search, and the Twitter Search URL.This information is cached for 5 minutes. Requesting more frequently than that will not return any more data, and will count against rate limit usage.The tweet_volume for the last 24 hours is also returned for many trends if this is available.
   *
   * @link https://developer.twitter.com/en/docs/trends/trends-for-location/api-reference/get-trends-place
   * @param parameters
   */
  public async trendsPlace(parameters: TrendsPlaceParams) {
    const params = createParams(parameters);
    return await doGetRequest<TrendsPlace[]>('https://api.twitter.com/1.1/trends/place.json' + params);
  }

}

export default TrendsClient;
