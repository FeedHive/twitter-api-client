export interface FavoritesListParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name?: string;
  /**
  * Specifies the number of records to retrieve. Must be less than or equal to 200; defaults to 20. The value of count is best thought of as a limit to the number of Tweets to return because suspended or deleted content is removed after the count has been applied.
  */
  count?: string | number;
  /**
  * Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
  */
  since_id?: string | number;
  /**
  * Returns results with an ID less than (that is, older than) or equal to the specified ID.
  */
  max_id?: string | number;
  /**
  * The entities node will be omitted when set to false .
  */
  include_entities?: boolean;
}

export interface StatusesLookupParams {
  /**
  * A comma separated list of Tweet IDs, up to 100 are allowed in a single request.
  */
  id: string;
  /**
  * The entities node that may appear within embedded statuses will not be included when set to false.
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 , each Tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
  /**
  * When using the map parameter, Tweets that do not exist or cannot be viewed by the current user will still have their key represented but with an explicitly null value paired with it
  */
  map?: boolean;
  /**
  * If alt text has been added to any attached media entities, this parameter will return an ext_alt_text value in the top-level key for the media entity. If no value has been set, this will be returned as null
  */
  include_ext_alt_text?: boolean;
  /**
  * When set to either true , t or 1 , each Tweet returned will include a card_uri attribute when there is an ads card attached to the Tweet and when that card was attached using the card_uri value.
  */
  include_card_uri?: boolean;
}

export interface StatusesRetweetsByIdParams {
  /**
  * The numerical ID of the desired status.
  */
  id: string | number;
  /**
  * Specifies the number of records to retrieve. Must be less than or equal to 100.
  */
  count?: string | number;
  /**
  * When set to either true , t or 1 , each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
}

export interface StatusesRetweetsOfMeParams {
  /**
  * Specifies the number of records to retrieve. Must be less than or equal to 100. If omitted, 20 will be assumed.
  */
  count?: string | number;
  /**
  * Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
  */
  since_id?: string | number;
  /**
  * Returns results with an ID less than (that is, older than) or equal to the specified ID.
  */
  max_id?: string | number;
  /**
  * When set to either true , t or 1 , each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
  /**
  * The tweet entities node will not be included when set to false .
  */
  include_entities?: boolean;
  /**
  * The user entities node will not be included when set to false .
  */
  include_user_entities?: boolean;
}

export interface StatusesShowByIdParams {
  /**
  * The numerical ID of the desired Tweet.
  */
  id: string | number;
  /**
  * When set to either true , t or 1 , each Tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
  /**
  * When set to either true , t or 1 , any Tweets returned that have been retweeted by the authenticating user will include an additional current_user_retweet node, containing the ID of the source status for the retweet.
  */
  include_my_retweet?: boolean;
  /**
  * The entities node will not be included when set to false.
  */
  include_entities?: boolean;
  /**
  * If alt text has been added to any attached media entities, this parameter will return an ext_alt_text value in the top-level key for the media entity. If no value has been set, this will be returned as null
  */
  include_ext_alt_text?: boolean;
  /**
  * When set to either true , t or 1 , the retrieved Tweet will include a card_uri attribute when there is an ads card attached to the Tweet and when that card was attached using the card_uri value.
  */
  include_card_uri?: boolean;
}

export interface FavoritesCreateParams {
  /**
  * The numerical ID of the Tweet to like.
  */
  id: string | number;
  /**
  * The entities node will be omitted when set to false .
  */
  include_entities?: boolean;
}

export interface FavoritesDestroyParams {
  /**
  * The numerical ID of the Tweet to un-like
  */
  id: string | number;
  /**
  * The entities node will be omitted when set to false .
  */
  include_entities?: boolean;
}

export interface StatusesDestroyByIdParams {
  /**
  * The numerical ID of the desired status.
  */
  id: string | number;
  /**
  * When set to either true , t or 1 , each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
}

export interface StatusesRetweetByIdParams {
  /**
  * The numerical ID of the desired status.
  */
  id: string | number;
  /**
  * When set to either true , t or 1 , each tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
}

export interface StatusesUnretweetByIdParams {
  /**
  * The numerical ID of the desired status.
  */
  id: string | number;
  /**
  * When set to either true , t or 1 , each Tweet returned in a timeline will include a user object including only the status authors numerical ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
}

export interface StatusesUpdateParams {
  /**
  *   The text of the status update. URL encode as necessary. t.co link wrapping will affect character counts.
  */
  status: string;
  /**
  * The ID of an existing status that the update is in reply to.
  */
  in_reply_to_status_id?: string | number
  /**
  * If set to true and used with in_reply_to_status_id, leading @mentions will be looked up from the original Tweet, and added to the new Tweet from there.
  */
  auto_populate_reply_metadata?: boolean;
  /**
  * When used with auto_populate_reply_metadata, a comma-separated list of user ids which will be removed from the server-generated @mentions prefix on an extended Tweet.
  */
  exclude_reply_user_ids?: string;
  /**
  * In order for a URL to not be counted in the status body of an extended Tweet, provide a URL as a Tweet attachment. This URL must be a Tweet permalink, or Direct Message deep link.
  */
  attachment_url?: string;
  /**
  * A comma-delimited list of media_ids to associate with the Tweet.
  */
  media_ids?: string
  /**
  * If you upload Tweet media that might be considered sensitive content such as nudity, or medical procedures, you must set this value to true.
  */
  possibly_sensitive?: boolean;
  /**
  * The latitude of the location this Tweet refers to. This parameter will be ignored unless it is inside the range -90.0 to +90.0 (North is positive) inclusive.
  */
  lat?: number | string;
  /**
  * The longitude of the location this Tweet refers to. The valid ranges for longitude are -180.0 to +180.0 (East is positive) inclusive.
  */
  long?: number | string;
  /**
  * A place in the world.
  */
  place_id?: string;
  /**
  * Whether or not to put a pin on the exact coordinates a Tweet has been sent from.
  */
  display_coordinates?: boolean;
  /**
  * When set to either true, the response will include a user object including only the author's ID. Omit this parameter to receive the complete user object.
  */
  trim_user?: boolean;
  /**
  * When set to true, enables shortcode commands for sending Direct Messages as part of the status text to send a Direct Message to a user.
  */
  enable_dmcommands?: boolean;
  /**
  * When set to true, causes any status text that starts with shortcode commands to return an API error.
  */
  fail_dmcommands?: boolean;
  /**
  * Associate an ads card with the Tweet using the card_uri value from any ads card response.
  */
  card_uri?: string;
}
