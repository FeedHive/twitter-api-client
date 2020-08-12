export interface CollectionsEntriesParams {
  /**
  * The identifier of the Collection for which to return results.
  */
  id: string;
  /**
  * Specifies the maximum number of results to include in the response. Specify a count between 1 and 200. A next_cursor value will be provided in the response if additional results are available.
  */
  count?: string | number;
  /**
  * Returns results with a position value less than or equal to the specified position.
  */
  max_position?: string | number;
  /**
  * Returns results with a position greater than the specified position.
  */
  min_position?: string | number;
}

export interface CollectionsListParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name: string;
  /**
  * The identifier of the Tweet for which to return results.
  */
  tweet_id?: string | number;
  /**
  * Specifies the maximum number of results to include in the response. Specify a count between 1 and 200. A next_cursor value will be provided in the response if additional results are available.
  */
  count?: string | number;
  /**
  * A string identifying the segment of the current result set to retrieve. Values for this parameter are yielded in the cursors node attached to response objects. Usage of the count parameter affects cursoring.
  */
  cursor?: string;
}

export interface CollectionsShowParams {
  /**
  * The identifier of the Collection for which to return results.
  */
  id: string;
}

export interface CollectionsCreateParams {
  /**
  * The title of the collection being created, in 25 characters or less.
  */
  name: string;
  /**
  * A brief description of this collection in 160 characters or fewer.
  */
  description?: string;
  /**
  * A fully-qualified URL to associate with this collection.
  */
  url?: string;
  /**
  * Order Tweets chronologically or in the order they are added to a Collection. curation_reverse_chron - order added (default) tweet_chron - oldest first tweet_reverse_chron - most recent first
  */
  timeline_order?: string;
}

export interface CollectionsDestroyParams {
  /**
  * The identifier of the Collection to destroy.
  */
  id: string;
}

export interface CollectionsEntriesAddParams {
  /**
  * The identifier of the Collection receiving the Tweet.
  */
  id: string;
  /**
  * The identifier of the Tweet to add to the Collection.
  */
  tweet_id: string | number;
  /**
  * The identifier of the Tweet used for relative positioning in a curation_reverse_chron ordered collection.
  */
  relative_to?: string | number;
  /**
  * Set to false to insert the specified tweet_id below the relative_to Tweet in the collection. Default: true
  */
  above?: boolean;
}

export interface CollectionsEntriesMoveParams {
  /**
  * The identifier of the Collection receiving the Tweet.
  */
  id: string;
  /**
  * The identifier of the Tweet to add to the Collection.
  */
  tweet_id: string | number;
  /**
  * The identifier of the Tweet used for relative positioning.
  */
  relative_to: string | number;
  /**
  * Set to false to insert the specified tweet_id below the relative_to Tweet in the collection. Default: true
  */
  above?: boolean;
}

export interface CollectionsEntriesRemoveParams {
  /**
  * The identifier of the target Collection.
  */
  id: string;
  /**
  * The identifier of the Tweet to remove.
  */
  tweet_id: string | number;
}

export interface CollectionsUpdateParams {
  /**
  * The identifier of the Collection to modify.
  */
  id: string;
  /**
  * The title of the Collection being created, in 25 characters or fewer.
  */
  name?: string;
  /**
  * A brief description of this Collection in 160 characters or fewer.
  */
  description?: string;
  /**
  * A fully-qualified URL to associate with this Collection.
  */
  url?: string;
}
