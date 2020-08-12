export interface FollowersIdsParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name?: string;
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
  /**
  * Some programming environments will not consume Twitter IDs due to their size. Provide this option to have IDs returned as strings instead.
  */
  stringify_ids?: boolean;
  /**
  * Specifies the number of IDs attempt retrieval of, up to a maximum of 5,000 per distinct request. The value of count is best thought of as a limit to the number of results to return. When using the count parameter with this method, it is wise to use a consistent count value across all requests to the same user's collection. Usage of this parameter is encouraged in environments where all 5,000 IDs constitutes too large of a response.
  */
  count?: string | number;
}

export interface FollowersListParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name?: string;
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
  /**
  * Specifies the number of IDs attempt retrieval of, up to a maximum of 5,000 per distinct request. The value of count is best thought of as a limit to the number of results to return. When using the count parameter with this method, it is wise to use a consistent count value across all requests to the same user's collection. Usage of this parameter is encouraged in environments where all 5,000 IDs constitutes too large of a response.
  */
  count?: string | number;
  /**
  * When set to either true, t or 1, statuses will not be included in the returned user objects. If set to any other value, statuses will be included.
  */
  skip_status?: boolean;
  /**
  * The user object entities node will not be included when set to false.
  */
  include_user_entities?: boolean;
}

export interface FriendsIdsParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name?: string;
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
  /**
  * Some programming environments will not consume Twitter IDs due to their size. Provide this option to have IDs returned as strings instead.
  */
  stringify_ids?: boolean;
  /**
  * Specifies the number of IDs attempt retrieval of, up to a maximum of 5,000 per distinct request. The value of count is best thought of as a limit to the number of results to return. When using the count parameter with this method, it is wise to use a consistent count value across all requests to the same user's collection. Usage of this parameter is encouraged in environments where all 5,000 IDs constitutes too large of a response.
  */
  count?: string | number;
}

export interface FriendsListParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name?: string;
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
  /**
  * Specifies the number of IDs attempt retrieval of, up to a maximum of 5,000 per distinct request. The value of count is best thought of as a limit to the number of results to return. When using the count parameter with this method, it is wise to use a consistent count value across all requests to the same user's collection. Usage of this parameter is encouraged in environments where all 5,000 IDs constitutes too large of a response.
  */
  count?: string | number;
  /**
  * When set to either true, t or 1, statuses will not be included in the returned user objects. If set to any other value, statuses will be included.
  */
  skip_status?: boolean;
  /**
  * The user object entities node will not be included when set to false.
  */
  include_user_entities?: boolean;
}

export interface FriendshipsIncomingParams {
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
}

export interface FriendshipsLookupParams {
  /**
  * The ID of the user for whom to return results.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results.
  */
  screen_name?: string;
}

export interface FriendshipsNoRetweetsIdsParams {
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
  /**
  * Some programming environments will not consume Twitter IDs due to their size. Provide this option to have IDs returned as strings instead.
  */
  stringify_ids?: boolean;
}

export interface FriendshipsOutgoingParams {
  /**
  * Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The number of IDs returned is not guaranteed to be 5000 as suspended users are filtered out after connections are queried. If no cursor is provided, a value of -1 will be assumed, which is the first page.
  */
  cursor?: string | number;
  /**
  * Some programming environments will not consume Twitter IDs due to their size. Provide this option to have IDs returned as strings instead.
  */
  stringify_ids?: boolean;
}

export interface FriendshipsShowParams {
  /**
  * The user_id of the subject user.
  */
  source_id?: string | number;
  /**
  * The screen_name of the subject user.
  */
  source_screen_name?: string;
  /**
  * The user_id of the target user.
  */
  target_id?: string | number;
  /**
  * The screen_name of the target user.
  */
  target_screen_name?: string;
}

export interface UsersLookupParams {
  /**
  * A comma separated list of screen names, up to 100 are allowed in a single request. You are strongly encouraged to use a POST for larger (up to 100 screen names) requests.
  */
  screen_name?: string;
  /**
  * A comma separated list of user IDs, up to 100 are allowed in a single request. You are strongly encouraged to use a POST for larger requests.
  */
  user_id?: string;
  /**
  * The entities node that may appear within embedded statuses will not be included when set to false.
  */
  include_entities?: boolean;
  /**
  * Valid request values are compat and extended, which give compatibility mode and extended mode, respectively for Tweets that contain over 140 characters
  */
  tweet_mode?: boolean;
}

export interface UsersSearchParams {
  /**
  * The search query to run against people search.
  */
  q: string;
  /**
  * Specifies the page of results to retrieve.
  */
  page?: string | number;
  /**
  * The number of potential user results to retrieve per page. This value has a maximum of 20.
  */
  count?: string | number;
  /**
  * The entities node will not be included in embedded Tweet objects when set to false .
  */
  include_entities?: boolean;
}

export interface UsersShowParams {
  /**
  * The ID of the user for whom to return results. Either an id or screen_name is required for this method.
  */
  user_id: string | number;
  /**
  * The screen name of the user for whom to return results. Either a id or screen_name is required for this method.
  */
  screen_name: string;
  /**
  * The entities node will not be included when set to false.
  */
  include_entities?: boolean;
}

export interface FriendshipsCreateParams {
  /**
  * The screen name of the user to follow.
  */
  screen_name?: string;
  /**
  * The ID of the user to follow.
  */
  user_id?: string | number;
  /**
  * Enable notifications for the target user.
  */
  follow?: boolean;
}

export interface FriendshipsDestroyParams {
  /**
  * The screen name of the user to unfollow.
  */
  screen_name?: string;
  /**
  * The ID of the user to unfollow.
  */
  user_id?: string | number;
}

export interface FriendshipsUpdateParams {
  /**
  * The screen name of the user being followed.
  */
  screen_name?: string;
  /**
  * The ID of the user being followed.
  */
  user_id?: string | number;
  /**
  * Enable/disable device notifications from the target user.
  */
  device?: boolean;
  /**
  * Enable/disable Retweets from the target user.
  */
  retweets?: boolean;
}
