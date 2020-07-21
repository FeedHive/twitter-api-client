import IClientOptions from '../interfaces/IClientOptions';
import { setOptions } from '../requests/base';
import * as accountsAndUsers from '../requests/accountsAndUsers';
import {
  UserIdOrScreenName,
  IParameterWithId,
  IParameterWithQuery,
} from '../interfaces/GenericTypes';

class TwitterRequester {
  /**
   * Provide Twitter API Credentials and options
   * @param options
   */
  constructor(options: IClientOptions) {
    if (!options.apiKey) {
      throw Error('API KEY needs to be provided.');
    }

    if (!options.apiSecret) {
      throw Error('API SECRET needs to be provided.');
    }

    if (!options.accessToken) {
      throw Error('ACCESS TOKEN needs to be provided.');
    }

    if (!options.accessTokenSecret) {
      throw Error('ACCESS TOKEN SECRET needs to be provided.');
    }

    setOptions(options);
  }

  // Accounts And Users

  /**
   * Returns settings (including current trend, geo and sleep time information) for the authenticating user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-settings
   */
  public async accountSettings() {
    return accountsAndUsers.accountSettings();
  }

  /**
   * Returns a representation of the requesting user if authentication was successful.
   * Use this method to test if supplied user credentials are valid.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials
   * @param parameters
   */
  public async accountVerifyCredentials(
    parameters?: accountsAndUsers.IAccountVerifyCrendetialsParams,
  ) {
    return accountsAndUsers.accountVerifyCredentials(parameters);
  }

  /**
   * Returns a map of the available size variations of the specified user's profile banner.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-users-profile_banner
   * @param paramaters
   */
  public async usersProfileBanner(parameters: UserIdOrScreenName) {
    return accountsAndUsers.usersProfileBanner(parameters);
  }

  /**
   * Returns the authenticated user's saved search queries.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-list
   */
  public async savedSearchesList() {
    return accountsAndUsers.savedSearchesList();
  }

  /**
   * Retrieve the information for the saved search represented by the given id.
   * The authenticating user must be the owner of saved search ID being requested.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-show-id
   * @param parameters
   */
  public async savedSearchesShow(parameters: IParameterWithId) {
    return accountsAndUsers.savedSearchesShow(parameters);
  }

  /**
   * Removes the uploaded profile banner for the authenticating user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-remove_profile_banner
   */
  public async accountRemoveProfileBanner() {
    return accountsAndUsers.accountRemoveProfileBanner();
  }

  /**
   * Updates the authenticating user's settings.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-settings
   * @param parameters
   */
  public async accountUpdateSettings(parameters?: accountsAndUsers.IAccountSettingsParams) {
    return accountsAndUsers.accountUpdateSettings(parameters);
  }

  /**
   * Sets some values that users are able to set under the "Account" tab of their settings page. Only the parameters specified will be updated.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile
   * @param parameters
   */
  public async accountUpdateProfile(parameters?: accountsAndUsers.IAccountUpdateProfileParams) {
    return accountsAndUsers.accountUpdateProfile(parameters);
  }

  /**
   * Uploads a profile banner on behalf of the authenticating user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_banner
   * @param parameters
   */
  public async accountUpdateProfileBanner(
    parameters: accountsAndUsers.IAccountUpdateProfileBannerParams,
  ) {
    return accountsAndUsers.accountUpdateProfileBanner(parameters);
  }

  /**
   * Updates the authenticating user's profile image. Note that this method expects raw multipart data, not a URL to an image.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_image
   * @param parameters
   */
  public async accountUpdateProfileImage(
    parameters: accountsAndUsers.IAccountUpdateProfileImageParams,
  ) {
    return accountsAndUsers.accountUpdateProfileImage(parameters);
  }

  /**
   * reate a new saved search for the authenticated user. A user may only have 25 saved searches.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-create
   * @param parameters
   */
  public async savedSearchesCreate(parameters: IParameterWithQuery) {
    return accountsAndUsers.savedSearchesCreate(parameters);
  }

  /**
   * Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-destroy-id
   * @param parameters
   */
  public async savedSearchesDestroy(parameters: IParameterWithId) {
    return accountsAndUsers.savedSearchesDestroy(parameters);
  }
}

export default TwitterRequester;
