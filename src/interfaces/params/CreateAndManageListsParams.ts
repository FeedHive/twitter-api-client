export interface ListsListParams {
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name. Note: : Specifies the ID of the user to get lists from. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * Set this to true if you would like owned lists to be returned first. See description above for information on how this parameter works.
  */
  reverse?: boolean;
}

export interface ListsMembersShowParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name: string;
  /**
  * The screen name of the user who owns the list being requested by a slug.
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug.
  */
  owner_id?: string | number;
  /**
  * When set to either true, t or 1, each tweet will include a node called "entities". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details.
  */
  include_entities?: boolean;
  /**
  * When set to either true, t or 1 statuses will not be included in the returned user objects.
  */
  skip_status?: boolean;
}

export interface ListsMembershipsParams {
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The amount of results to return per page. Defaults to 20. No more than 1000 results will ever be returned in a single page.
  */
  count?: string | number;
  /**
  * Breaks the results into pages. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. It is recommended to always use cursors when the method supports them. See Cursoring for more information.
  */
  cursor?: string | number;
  /**
  * When set to true , t or 1 , will return just lists the authenticating user owns, and the user represented by user_id or screen_name is a member of.
  */
  filter_to_owned_lists?: string | number;
}

export interface ListsOwnershipsParams {
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The amount of results to return per page. Defaults to 20. No more than 1000 results will ever be returned in a single page.
  */
  count?: string | number;
  /**
  * Breaks the results into pages. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. It is recommended to always use cursors when the method supports them. See Cursoring for more information.
  */
  cursor?: string | number;
}

export interface ListsShowParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
}

export interface ListsStatusesParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
  /**
  * Returns results with an ID greater than (that is, more recent than) the specified ID. There are limits to the number of Tweets which can be accessed through the API. If the limit of Tweets has occured since the since_id, the since_id will be forced to the oldest ID available.
  */
  since_id?: string | number;
  /**
  * Returns results with an ID less than (that is, older than) or equal to the specified ID.
  */
  max_id?: string | number;
  /**
  * Specifies the number of results to retrieve per "page."
  */
  count?: string | number;
  /**
  * Entities are ON by default in API 1.1, each tweet includes a node called "entities". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. You can omit entities from the result by using include_entities=false
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 , the list timeline will contain native retweets (if they exist) in addition to the standard stream of tweets. The output format of retweeted tweets is identical to the representation you see in home_timeline.
  */
  include_rts?: string | number;
}

export interface ListsSubscribersParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
  /**
  * Specifies the number of results to return per page (see cursor below). The default is 20, with a maximum of 5,000.
  */
  count?: string | number;
  /**
  * Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. See Using cursors to navigate collections for more information.
  */
  cursor?: string | number;
  /**
  * When set to either true , t or 1 , each tweet will include a node called "entities". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details.
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 statuses will not be included in the returned user objects.
  */
  skip_status?: boolean;
}

export interface ListsSubscribersShowParams {
  /**
  * The screen name of the user who owns the list being requested by a slug.
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug.
  */
  owner_id?: string | number;
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name: string;
  /**
  * When set to either true, t or 1, each Tweet will include a node called "entities". This node offers a variety of metadata about the tweet in a discreet structure, including: user_mentions, urls, and hashtags. While entities are opt-in on timelines at present, they will be made a default component of output in the future. See Tweet Entities for more details.
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 statuses will not be included in the returned user objects.
  */
  skip_status?: boolean;
}

export interface ListsSubscriptionsParams {
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The amount of results to return per page. Defaults to 20. No more than 1000 results will ever be returned in a single page.
  */
  count?: string | number;
  /**
  * Breaks the results into pages. Provide a value of -1 to begin paging. Provide values as returned in the response body's next_cursor and previous_cursor attributes to page back and forth in the list. It is recommended to always use cursors when the method supports them. See Cursoring for more information.
  */
  cursor?: string | number;
}

export interface ListsCreateParams {
  /**
  * The name for the list. A list's name must start with a letter and can consist only of 25 or fewer letters, numbers, "-", or "_" characters.
  */
  name: string | number;
  /**
  * Whether your list is public or private. Values can be public or private . If no mode is specified the list will be public.
  */
  mode?: string | number;
  /**
  * The description to give the list.
  */
  description?: string | number;
}

export interface ListsDestroyParams {
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
}

export interface ListsMembersCreateParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id: string | number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name: string;
  /**
  * The screen name of the user who owns the list being requested by a slug.
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug.
  */
  owner_id?: string | number;
}

export interface ListsMembersCreateAllParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * A comma separated list of user IDs, up to 100 are allowed in a single request.
  */
  user_id?: string | number;
  /**
  * A comma separated list of screen names, up to 100 are allowed in a single request.
  */
  screen_name?: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
}

export interface ListsMembersDestroyParams {
  /**
  * The numerical id of the list.
  */
  list_id?: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug?: string;
  /**
  * The ID of the user to remove from the list. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: string | number;
  /**
  * The screen name of the user for whom to remove from the list. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
}

export interface ListsMembersDestroyAllParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * A comma separated list of user IDs, up to 100 are allowed in a single request.
  */
  user_id?: string | number;
  /**
  * A comma separated list of screen names, up to 100 are allowed in a single request.
  */
  screen_name?: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
}

export interface ListsSubscribersCreateParams {
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
}

export interface ListsSubscribersDestroyParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
}

export interface ListsUpdateParams {
  /**
  * The numerical id of the list.
  */
  list_id: string | number;
  /**
  * You can identify a list by its slug instead of its numerical id. If you decide to do so, note that you'll also have to specify the list owner using the owner_id or owner_screen_name parameters.
  */
  slug: string;
  /**
  * The name for the list.
  */
  name?: string | number;
  /**
  * Whether your list is public or private. Values can be public or private . If no mode is specified the list will be public.
  */
  mode?: string | number;
  /**
  * The description to give the list.
  */
  description?: string | number;
  /**
  * The screen name of the user who owns the list being requested by a slug .
  */
  owner_screen_name?: string;
  /**
  * The user ID of the user who owns the list being requested by a slug .
  */
  owner_id?: string | number;
}
