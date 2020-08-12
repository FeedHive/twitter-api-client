import { doGetRequest, doPostRequest } from '../base/base';
import { createParams } from '../utils/utils';

import {
  OauthAuthenticateParams,
  OauthAuthorizeParams,
  Oauth2TokenParams,
} from '../interfaces/params/AuthenticationParams';

import OauthInvalidateToken from '../interfaces/types/OauthInvalidateTokenTypes';
import OauthRequestToken from '../interfaces/types/OauthRequestTokenTypes';
import Oauth2InvalidateToken from '../interfaces/types/Oauth2InvalidateTokenTypes';

class BasicsClient {
  /**
   *  Allows a Consumer application to use an OAuth request_token to request user authorization.This method is a replacement of Section 6.2 of the OAuth 1.0 authentication flow for applications using the callback authentication flow. The method will use the currently logged in user as the account for access authorization unless the force_login parameter is set to true.This method differs from GET oauth / authorize in that if the user has already granted the application permission, the redirect will occur without the user having to re-approve the application. To realize this behavior, you must enable the Use Sign in with Twitter setting on your application record.
   *
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/authenticate
   * @param parameters
   */
  public async oauthAuthenticate(parameters?: OauthAuthenticateParams) {
    const params = createParams(parameters);
    return await doGetRequest('https://api.twitter.com/oauth/authenticate' + params);
  }

  /**
   *  Allows a Consumer application to use an OAuth Request Token to request user authorization. This method fulfills Section 6.2 of the OAuth 1.0 authentication flow. Desktop applications must use this method (and cannot use GET oauth / authenticate).Usage Note: An oauth_callback is never sent to this method, provide it to POST oauth / request_token instead.
   *
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/authorize
   * @param parameters
   */
  public async oauthAuthorize(parameters?: OauthAuthorizeParams) {
    const params = createParams(parameters);
    return await doGetRequest('https://api.twitter.com/oauth/authorize' + params);
  }

  /**
   *  Allows a Consumer application to exchange the OAuth Request Token for an OAuth Access Token. This method fulfills Section 6.3 of the OAuth 1.0 authentication flow.
   *
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/access_token
   */
  public async oauthAccessToken() {
    return await doPostRequest('https://api.twitter.com/oauth/access_token');
  }

  /**
   *  Allows a registered application to revoke an issued OAuth access_token by presenting its client credentials. Once an access_token has been invalidated, new creation attempts will yield a different Access Token and usage of the invalidated token will no longer be allowed.
   *
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/invalidate_access_token
   */
  public async oauthInvalidateToken() {
    return await doPostRequest<OauthInvalidateToken>(
      'https://api.twitter.com/1.1/oauth/invalidate_token',
    );
  }

  /**
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token
   */
  public async oauthRequestToken() {
    return await doPostRequest<OauthRequestToken>('https://api.twitter.com/oauth/request_token');
  }

  /**
   *  Allows a registered application to revoke an issued oAuth 2.0 Bearer Token by presenting its client credentials. Once a Bearer Token has been invalidated, new creation attempts will yield a different Bearer Token and usage of the invalidated token will no longer be allowed.Successful responses include a JSON-structure describing the revoked Bearer Token.
   *
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/invalidate_bearer_token
   */
  public async oauth2InvalidateToken() {
    return await doPostRequest<Oauth2InvalidateToken>(
      'https://api.twitter.com/oauth2/invalidate_token',
    );
  }

  /**
   *  Allows a registered application to obtain an OAuth 2 Bearer Token, which can be used to make API requests on an application's own behalf, without a user context. This is called Application-only authentication.A Bearer Token may be invalidated using oauth2/invalidate_token. Once a Bearer Token has been invalidated, new creation attempts will yield a different Bearer Token and usage of the previous token will no longer be allowed.Only one bearer token may exist outstanding for an application, and repeated requests to this method will yield the same already-existent token until it has been invalidated.Successful responses include a JSON-structure describing the awarded Bearer Token.Tokens received by this method should be cached. If attempted too frequently, requests will be rejected with a HTTP 403 with code 99.
   *
   * @link https://developer.twitter.com/en/docs/basics/authentication/api-reference/token
   * @param parameters
   */
  public async oauth2Token(parameters: Oauth2TokenParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/oauth2/token' + params);
  }
}

export default BasicsClient;
