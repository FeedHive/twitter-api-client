export interface OauthAuthenticateParams {
  /**
  * Forces the user to enter their credentials to ensure the correct users account is authorized.
  */
  force_login?: boolean;
  /**
  * Prefills the username input box of the OAuth login screen with the given value.
  */
  screen_name?: string;
}

export interface OauthAuthorizeParams {
  /**
  * Forces the user to enter their credentials to ensure the correct users account is authorized.
  */
  force_login?: boolean;
  /**
  * Prefills the username input box of the OAuth login screen with the given value.
  */
  screen_name?: string;
}

export interface Oauth2TokenParams {
  /**
  * Specifies the type of grant being requested by the application. At this time, only client_credentials is allowed. See Application-Only Authentication for more information.
  */
  grant_type: string;
}
