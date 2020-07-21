import ITweet from '../interfaces/ITweet';
import ITwitterUser from '../interfaces/ITwitterUser';
import IClientOptions from '../interfaces/IClientOptions';
import { setOptions } from '../requests/base';
import {
  getAssociatedUsers,
  getUserFromID,
  handleFriendship,
  getTweetCollection,
  getTweetsFromSearch,
  likeTweetGivenID,
} from '../requests/requests';

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

  /**
   * Get all followers associated with Twitter account
   */
  public async getFollowers(): Promise<string[]> {
    return getAssociatedUsers('followers');
  }

  /**
   * Get all friends associated with Twitter account
   */
  public async getFriends(): Promise<string[]> {
    return getAssociatedUsers('friends');
  }

  /**
   * Get a twitter user
   * @param userID ID of twitter user
   */
  public async getUser(userID: string): Promise<ITwitterUser | null> {
    return getUserFromID(userID);
  }

  /**
   * Follow a twitter user
   * @param userID ID of twitter user to follow
   */
  public async followUser(userID: string): Promise<ITwitterUser | null> {
    return handleFriendship(userID, 'create');
  }

  /**
   * Unfollow a twitter user
   * @param userID ID of twitter user to unfollow
   */
  public async unfollowUser(userID: string): Promise<ITwitterUser | null> {
    return handleFriendship(userID, 'destroy');
  }

  /**
   * Get most recent tweets from a user
   * @param userID ID of user to get tweets from
   * @param count The amount of recent tweets to get
   */
  public async getRecentTweets(userID: string, count?: number): Promise<ITweet[]> {
    return getTweetCollection(userID, count);
  }

  /**
   * Get most recent tweets from authenticated user
   * @param count
   */
  public async getMyRecentTweets(count?: number): Promise<ITweet[]> {
    return getTweetCollection(process.env.TWITTER_ID || '', count);
  }

  /**
   * Get a list of relevant tweets
   * @param query Search word
   * @param count The amount of tweets to get
   */
  public async getRelevantTweets(query: string, count?: number): Promise<ITweet[]> {
    return getTweetsFromSearch(query, count);
  }

  /**
   * Like a tweet
   * @param tweetID tweet to like
   */
  public async likeTweet(tweetID: string): Promise<void> {
    likeTweetGivenID(tweetID);
  }
}

export default TwitterRequester;
