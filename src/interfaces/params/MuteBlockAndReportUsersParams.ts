export interface BlocksCreateParams {
  /**
  * The screen name of the potentially blocked user. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The ID of the potentially blocked user. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: number;
  /**
  * The entities node will not be included when set to false .
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 statuses will not be included in the returned user objects.
  */
  skip_status?: boolean;
}

export interface MutesUsersCreateParams {
  /**
  * The screen name of the potentially muted user. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The ID of the potentially muted user. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: number;
}

export interface MutesUsersDestroyParams {
  /**
  * The screen name of the potentially muted user. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The ID of the potentially muted user. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: number;
}

export interface UsersReportSpamParams {
  /**
  * The screen_name of the user to report as a spammer. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
  /**
  * The ID of the user to report as a spammer. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: number;
  /**
  * Whether the account should be blocked by the authenticated user, as well as being reported for spam.
  */
  perform_block?: boolean;
}
