import { doGetRequest, doPostRequest } from '../base/base';
import { createParams } from '../utils/utils';

import {
  CollectionsEntriesParams,
  CollectionsListParams,
  CollectionsShowParams,
  CollectionsCreateParams,
  CollectionsDestroyParams,
  CollectionsEntriesAddParams,
  CollectionsEntriesMoveParams,
  CollectionsEntriesRemoveParams,
  CollectionsUpdateParams,
} from '../interfaces/params/CurateACollectionOfTweetsParams';

import {
  StatusesHomeTimelineParams,
  StatusesMentionsTimelineParams,
  StatusesUserTimelineParams,
} from '../interfaces/params/GetTweetTimelinesParams';

import {
  FavoritesListParams,
  StatusesLookupParams,
  StatusesRetweetsByIdParams,
  StatusesRetweetsOfMeParams,
  StatusesShowByIdParams,
  FavoritesCreateParams,
  FavoritesDestroyParams,
  StatusesDestroyByIdParams,
  StatusesRetweetByIdParams,
  StatusesUnretweetByIdParams,
} from '../interfaces/params/PostRetrieveAndEngageWithTweetsParams';

import CollectionsEntries from '../interfaces/types/CollectionsEntriesTypes';
import CollectionsList from '../interfaces/types/CollectionsListTypes';
import CollectionsShow from '../interfaces/types/CollectionsShowTypes';
import CollectionsCreate from '../interfaces/types/CollectionsCreateTypes';
import CollectionsDestroy from '../interfaces/types/CollectionsDestroyTypes';
import CollectionsUpdate from '../interfaces/types/CollectionsUpdateTypes';
import StatusesHomeTimeline from '../interfaces/types/StatusesHomeTimelineTypes';
import StatusesMentionsTimeline from '../interfaces/types/StatusesMentionsTimelineTypes';
import StatusesUserTimeline from '../interfaces/types/StatusesUserTimelineTypes';
import FavoritesList from '../interfaces/types/FavoritesListTypes';
import StatusesLookup from '../interfaces/types/StatusesLookupTypes';
import StatusesRetweetersIds from '../interfaces/types/StatusesRetweetersIdsTypes';
import StatusesRetweetsById from '../interfaces/types/StatusesRetweetsByIdTypes';
import StatusesRetweetsOfMe from '../interfaces/types/StatusesRetweetsOfMeTypes';
import StatusesShowById from '../interfaces/types/StatusesShowByIdTypes';
import FavoritesCreate from '../interfaces/types/FavoritesCreateTypes';
import FavoritesDestroy from '../interfaces/types/FavoritesDestroyTypes';
import StatusesDestroyById from '../interfaces/types/StatusesDestroyByIdTypes';
import StatusesUnretweetById from '../interfaces/types/StatusesUnretweetByIdTypes';

class TweetsClient {
  /**
   *  Retrieve the identified Collection, presented as a list of the Tweets curated within.The response structure of this method differs significantly from timelines you may be used to working with elsewhere in the Twitter API.To navigate a Collection, use the position object of a response, which includes attributes for max_position, min_position, and was_truncated. was_truncated indicates whether additional Tweets exist in the collection outside of the range of the current request. To retrieve Tweets further back in time, use the value of min_position found in the current response as the max_position parameter in the next call to this endpoint.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-entries
   * @param parameters
   */
  public async collectionsEntries(parameters: CollectionsEntriesParams) {
    const params = createParams(parameters);
    return await doGetRequest<CollectionsEntries>('https://api.twitter.com/1.1/collections/entries.json' + params);
  }

  /**
   *  Find Collections created by a specific user or containing a specific curated Tweet.Results are organized in a cursored collection.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-list
   * @param parameters
   */
  public async collectionsList(parameters: CollectionsListParams) {
    const params = createParams(parameters);
    return await doGetRequest<CollectionsList>('https://api.twitter.com/1.1/collections/list.json' + params);
  }

  /**
   *  Retrieve information associated with a specific Collection.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-show
   * @param parameters
   */
  public async collectionsShow(parameters: CollectionsShowParams) {
    const params = createParams(parameters);
    return await doGetRequest<CollectionsShow>('https://api.twitter.com/1.1/collections/show.json' + params);
  }

  /**
   *  Create a Collection owned by the currently authenticated user.The API endpoint may refuse to complete the request if the authenticated user has exceeded the total number of allowed collections for their account.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-create
   * @param parameters
   */
  public async collectionsCreate(parameters: CollectionsCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<CollectionsCreate>('https://api.twitter.com/1.1/collections/create.json' + params);
  }

  /**
   *  Permanently delete a Collection owned by the currently authenticated user.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-destroy
   * @param parameters
   */
  public async collectionsDestroy(parameters: CollectionsDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest<CollectionsDestroy>('https://api.twitter.com/1.1/collections/destroy.json' + params);
  }

  /**
   *  Add a specified Tweet to a Collection.A collection will store up to a few thousand Tweets. Adding a Tweet to a collection beyond its allowed capacity will remove the oldest Tweet in the collection based on the time it was added to the collection.Use POST collections / entries / curate to add Tweets to a Collection in bulk.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-add
   * @param parameters
   */
  public async collectionsEntriesAdd(parameters: CollectionsEntriesAddParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/collections/entries/add.json' + params);
  }

  /**
   *  Curate a Collection by adding or removing Tweets in bulk. Updates must be limited to 100 cumulative additions or removals per request.Use POST collections / entries / add and POST collections / entries / remove to add or remove a single Tweet.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-curate
   */
  public async collectionsEntriesCurate() {
    return await doPostRequest('https://api.twitter.com/1.1/collections/entries/curate.json');
  }

  /**
   *  Move a specified Tweet to a new position in a curation_reverse_chron ordered collection.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-move
   * @param parameters
   */
  public async collectionsEntriesMove(parameters: CollectionsEntriesMoveParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/collections/entries/move.json' + params);
  }

  /**
   *  Remove the specified Tweet from a Collection.Use POST collections / entries / curate to remove Tweets from a Collection in bulk.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-remove
   * @param parameters
   */
  public async collectionsEntriesRemove(parameters: CollectionsEntriesRemoveParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/collections/entries/remove.json' + params);
  }

  /**
   *  Update information concerning a Collection owned by the currently authenticated user.Partial updates are not currently supported: please provide name, description, and url whenever using this method. Omitted description or url parameters will be treated as if an empty string was passed, overwriting any previously stored value for the Collection.
   *
   * @link https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-update
   * @param parameters
   */
  public async collectionsUpdate(parameters: CollectionsUpdateParams) {
    const params = createParams(parameters);
    return await doPostRequest<CollectionsUpdate>('https://api.twitter.com/1.1/collections/update.json' + params);
  }

  /**
   *  Returns a collection of the most recent Tweets and Retweets posted by the authenticating user and the users they follow. The home timeline is central to how most users interact with the Twitter service.Up to 800 Tweets are obtainable on the home timeline. It is more volatile for users that follow many users or follow users who Tweet frequently.See Working with Timelines for instructions on traversing timelines efficiently.
   *
   * @link https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline
   * @param parameters
   */
  public async statusesHomeTimeline(parameters?: StatusesHomeTimelineParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesHomeTimeline>('https://api.twitter.com/1.1/statuses/home_timeline.json' + params);
  }

  /**
   *  Important notice: On June 19, 2019, we began enforcing a limit of 100,000 requests per day to the /statuses/mentions_timeline endpoint. This is in addition to existing user-level rate limits (75 requests / 15-minutes). This limit is enforced on a per-application basis, meaning that a single developer app can make up to 100,000 calls during any single 24-hour period.Returns the 20 most recent mentions (Tweets containing a users's @screen_name) for the authenticating user.The timeline returned is the equivalent of the one seen when you view your mentions on twitter.com.This method can only return up to 800 tweets.See Working with Timelines for instructions on traversing timelines.
   *
   * @link https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline
   * @param parameters
   */
  public async statusesMentionsTimeline(parameters?: StatusesMentionsTimelineParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesMentionsTimeline[]>('https://api.twitter.com/1.1/statuses/mentions_timeline.json' + params);
  }

  /**
   *  Important notice: On June 19, 2019, we began enforcing a limit of 100,000 requests per day to the /statuses/user_timeline endpoint, in addition to existing user-level and app-level rate limits. This limit is applied on a per-application basis, meaning that a single developer app can make up to 100,000 calls during any single 24-hour period.Returns a collection of the most recent Tweets posted by the user indicated by the screen_name or user_id parameters.User timelines belonging to protected users may only be requested when the authenticated user either "owns" the timeline or is an approved follower of the owner.The timeline returned is the equivalent of the one seen as a user's profile on Twitter.This method can only return up to 3,200 of a user's most recent Tweets. Native retweets of other statuses by the user is included in this total, regardless of whether include_rts is set to false when requesting this resource.See Working with Timelines for instructions on traversing timelines.See Embedded Timelines, Embedded Tweets, and GET statuses/oembed for tools to render Tweets according to Display Requirements.
   *
   * @link https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
   * @param parameters
   */
  public async statusesUserTimeline(parameters?: StatusesUserTimelineParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesUserTimeline[]>('https://api.twitter.com/1.1/statuses/user_timeline.json' + params);
  }

  /**
   *  Note: favorites are now known as likes.Returns the 20 most recent Tweets liked by the authenticating or specified user.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-favorites-list
   * @param parameters
   */
  public async favoritesList(parameters?: FavoritesListParams) {
    const params = createParams(parameters);
    return await doGetRequest<FavoritesList[]>('https://api.twitter.com/1.1/favorites/list.json' + params);
  }

  /**
   *  Returns fully-hydrated Tweet objects for up to 100 Tweets per request, as specified by comma-separated values passed to the id parameter.This method is especially useful to get the details (hydrate) a collection of Tweet IDs.GET statuses / show / :id is used to retrieve a single Tweet object.There are a few things to note when using this method. You must be following a protected user to be able to see their most recent Tweets. If you don't follow a protected user their status will be removed. The order of Tweet IDs may not match the order of Tweets in the returned array. If a requested Tweet is unknown or deleted, then that Tweet will not be returned in the results list, unless the map parameter is set to true, in which case it will be returned with a value of null. If none of your lookup criteria matches valid Tweet IDs an empty array will be returned for map=false. You are strongly encouraged to use a POST for larger requests. 
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-lookup
   * @param parameters
   */
  public async statusesLookup(parameters: StatusesLookupParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesLookup[]>('https://api.twitter.com/1.1/statuses/lookup.json' + params);
  }

  /**
   *  Returns a collection of up to 100 user IDs belonging to users who have retweeted the Tweet specified by the id parameter.This method offers similar data to GET statuses / retweets / :id.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids
   */
  public async statusesRetweetersIds() {
    return await doGetRequest<StatusesRetweetersIds>('https://api.twitter.com/1.1/statuses/retweeters/ids.json');
  }

  /**
   *  Returns a collection of the 100 most recent retweets of the Tweet specified by the id parameter.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id
   * @param parameters
   */
  public async statusesRetweetsById(parameters: StatusesRetweetsByIdParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesRetweetsById[]>('https://api.twitter.com/1.1/statuses/retweets/' + parameters.id + '.json' + params);
  }

  /**
   *  Returns the most recent Tweets authored by the authenticating user that have been retweeted by others. This timeline is a subset of the user's GET statuses / user_timeline.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets_of_me
   * @param parameters
   */
  public async statusesRetweetsOfMe(parameters?: StatusesRetweetsOfMeParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesRetweetsOfMe[]>('https://api.twitter.com/1.1/statuses/retweets_of_me.json' + params);
  }

  /**
   *  Returns a single Tweet, specified by the id parameter. The Tweet's author will also be embedded within the Tweet.See GET statuses / lookup for getting Tweets in bulk (up to 100 per call). See also Embedded Timelines, Embedded Tweets, and GET statuses/oembed for tools to render Tweets according to Display Requirements.About GeoIf there is no geotag for a status, then there will be an empty <geo></geo> or "geo" : {}. This can only be populated if the user has used the Geotagging API to send a statuses/update.The JSON response mostly uses conventions laid out in GeoJSON. The coordinates that Twitter renders are reversed from the GeoJSON specification (GeoJSON specifies a longitude then a latitude, whereas Twitter represents it as a latitude then a longitude), eg: "geo": { "type":"Point", "coordinates":[37.78029, -122.39697] }
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-show-id
   * @param parameters
   */
  public async statusesShowById(parameters: StatusesShowByIdParams) {
    const params = createParams(parameters);
    return await doGetRequest<StatusesShowById>('https://api.twitter.com/1.1/statuses/show.json' + params);
  }

  /**
   *  Note: favorites are now known as likes.Favorites (likes) the Tweet specified in the ID parameter as the authenticating user. Returns the favorite Tweet when successful.The process invoked by this method is asynchronous. The immediately returned Tweet object may not indicate the resultant favorited status of the Tweet. A 200 OK response from this method will indicate whether the intended action was successful or not.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-favorites-create
   * @param parameters
   */
  public async favoritesCreate(parameters: FavoritesCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<FavoritesCreate>('https://api.twitter.com/1.1/favorites/create.json' + params);
  }

  /**
   *  Note: favorites are now known as likes.Unfavorites (un-likes) the Tweet specified in the ID parameter as the authenticating user. Returns the un-liked Tweet when successful.The process invoked by this method is asynchronous. The immediately returned Tweet object may not indicate the resultant favorited status of the Tweet. A 200 OK response from this method will indicate whether the intended action was successful or not.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-favorites-destroy
   * @param parameters
   */
  public async favoritesDestroy(parameters: FavoritesDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest<FavoritesDestroy>('https://api.twitter.com/1.1/favorites/destroy.json' + params);
  }

  /**
   *  Destroys the status specified by the required ID parameter. The authenticating user must be the author of the specified status. Returns the destroyed status if successful.
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-destroy-id
   * @param parameters
   */
  public async statusesDestroyById(parameters: StatusesDestroyByIdParams) {
    const params = createParams(parameters);
    return await doPostRequest<StatusesDestroyById>('https://api.twitter.com/1.1/statuses/destroy/' + parameters.id + '.json' + params);
  }

  /**
   *  Retweets a tweet. Returns the original Tweet with Retweet details embedded.Usage Notes: This method is subject to update limits. A HTTP 403 will be returned if this limit as been hit. Twitter will ignore attempts to perform duplicate retweets. The retweet_count will be current as of when the payload is generated and may not reflect the exact count. It is intended as an approximation. 
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-retweet-id
   * @param parameters
   */
  public async statusesRetweetById(parameters: StatusesRetweetByIdParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/statuses/retweet/' + parameters.id + '.json' + params);
  }

  /**
   *  Untweets a retweeted status. Returns the original Tweet with Retweet details embedded.Usage Notes: This method is subject to update limits. A HTTP 429 will be returned if this limit has been hit. The untweeted retweet status ID must be authored by the user backing the authentication token. An application must have write privileges to POST. A HTTP 401 will be returned for read-only applications. When passing a source status ID instead of the retweet status ID a HTTP 200 response will be returned with the same Tweet object but no action. 
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-unretweet-id
   * @param parameters
   */
  public async statusesUnretweetById(parameters: StatusesUnretweetByIdParams) {
    const params = createParams(parameters);
    return await doPostRequest<StatusesUnretweetById>('https://api.twitter.com/1.1/statuses/unretweet/' + parameters.id + '.json' + params);
  }

  /**
   *  Updates the authenticating user's current status, also known as Tweeting.For each update attempt, the update text is compared with the authenticating user's recent Tweets. Any attempt that would result in duplication will be blocked, resulting in a 403 error. A user cannot submit the same status twice in a row.While not rate limited by the API, a user is limited in the number of Tweets they can create at a time. If the number of updates posted by the user reaches the current allowed limit this method will return an HTTP 403 error.About Geo Any geo-tagging parameters in the update will be ignored if geo_enabled for the user is false (this is the default setting for all users, unless the user has enabled geolocation in their settings) The number of digits after the decimal separator passed to lat (up to 8) is tracked so that when the lat is returned in a status object it will have the same number of digits after the decimal separator. Use a decimal point as the separator (and not a decimal comma) for the latitude and the longitude - usage of a decimal comma will cause the geo-tagged portion of the status update to be dropped. For JSON, the response mostly uses conventions described in GeoJSON. However, the geo object coordinates that Twitter renders are reversed from the GeoJSON specification. GeoJSON specifies a longitude then a latitude, whereas Twitter represents it as a latitude then a longitude: "geo": { "type":"Point", "coordinates":[37.78217, -122.40062] } The coordinates object is replacing the geo object (no deprecation date has been set for the geo object yet) -- the difference is that the coordinates object, in JSON, is now rendered correctly in GeoJSON. If a place_id is passed into the status update, then that place will be attached to the status. If no place_id was explicitly provided, but latitude and longitude are, the API attempts to implicitly provide a place by calling geo/reverse_geocode. Users have the ability to remove all geotags from all their Tweets en masse via the user settings page. Currently there is no method to remove geotags from individual Tweets. 
   *
   * @link https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update
   */
  public async statusesUpdate() {
    return await doPostRequest('https://api.twitter.com/1.1/statuses/update.json');
  }

}

export default TweetsClient;
