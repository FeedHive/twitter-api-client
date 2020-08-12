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

