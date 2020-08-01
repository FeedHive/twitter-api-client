import IClientOptions from '../base/IClientOptions';
import { setOptions, updateOptions } from '../base/base';

import BasicsClient from './BasicsClient';
import AccountsAndUsersClient from './AccountsAndUsersClient';
import TweetsClient from './TweetsClient';
import DirectMessagesClient from './DirectMessagesClient';
import TrendsClient from './TrendsClient';
import GeoClient from './GeoClient';

class TwitterClient {
  private basicsClient: BasicsClient | undefined;
  private accountsAndUsersClient: AccountsAndUsersClient | undefined;
  private tweetsClient: TweetsClient | undefined;
  private directMessagesClient: DirectMessagesClient | undefined;
  private trendsClient: TrendsClient | undefined;
  private geoClient: GeoClient | undefined;

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

    setOptions(options);
  }

  /**
   * Set or re-set options for the client
   * @param options
   */
  public setOptions(options: Partial<IClientOptions>) {
    updateOptions(options);
  }

  public get basics() {
    if (!this.basicsClient) {
      this.basicsClient = new BasicsClient();
    }

    return this.basicsClient
  }

  public get accountsAndUsers() {
    if (!this.accountsAndUsersClient) {
      this.accountsAndUsersClient = new AccountsAndUsersClient();
    }

    return this.accountsAndUsersClient
  }

  public get tweets() {
    if (!this.tweetsClient) {
      this.tweetsClient = new TweetsClient();
    }

    return this.tweetsClient
  }

  public get directMessages() {
    if (!this.directMessagesClient) {
      this.directMessagesClient = new DirectMessagesClient();
    }

    return this.directMessagesClient
  }

  public get trends() {
    if (!this.trendsClient) {
      this.trendsClient = new TrendsClient();
    }

    return this.trendsClient
  }

  public get geo() {
    if (!this.geoClient) {
      this.geoClient = new GeoClient();
    }

    return this.geoClient
  }
}

export default TwitterClient;
