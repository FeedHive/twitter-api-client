export interface FriendshipsLookupParams {
  /**
  * A comma separated list of screen names, up to 100 are allowed in a single request.
  */
  screen_name?: string;
  /**
  * A comma separated list of user IDs, up to 100 are allowed in a single request.
  */
  user_id?: string;
}

export interface FriendshipsNoRetweetsIdsParams {
  /**
  * Some programming environments will not consume Twitter IDs due to their size. Provide this option to have IDs returned as strings instead. Read more about Twitter IDs. This parameter is important to use in Javascript environments.
  */
  stringify_ids?: boolean;
}

export interface FriendshipsShowParams {
  /**
  * The user_id of the subject user.
  */
  source_id?: number;
  /**
  * The screen_name of the subject user.
  */
  source_screen_name?: string;
  /**
  * The user_id of the target user.
  */
  target_id?: number;
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
  page?: number;
  /**
  * The number of potential user results to retrieve per page. This value has a maximum of 20.
  */
  count?: number;
  /**
  * The entities node will not be included in embedded Tweet objects when set to false .
  */
  include_entities?: boolean;
}

export interface UsersShowParams {
  /**
  * The ID of the user for whom to return results. Either an id or screen_name is required for this method.
  */
  user_id: number;
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
  user_id?: number;
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
  user_id?: number;
}

export interface FriendshipsUpdateParams {
  /**
  * The screen name of the user being followed.
  */
  screen_name?: string;
  /**
  * The ID of the user being followed.
  */
  user_id?: number;
  /**
  * Enable/disable device notifications from the target user.
  */
  device?: boolean;
  /**
  * Enable/disable Retweets from the target user.
  */
  retweets?: boolean;
}
