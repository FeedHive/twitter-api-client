import ITweet from '../interfaces/ITweet';
import ITwitterUser, { ITwitterIdListResult } from '../interfaces/ITwitterUser';
import { doGetRequest, doPostRequest } from './base';

export const getAssociatedUsers = async (
  type: 'followers' | 'friends',
  cursor: number = -1,
): Promise<string[]> => {
  try {
    const result = await doGetRequest(
      `${type}/ids.json?count=5000&stringify_ids=true&cursor=${cursor}`,
    );
    const parsedResult = result as ITwitterIdListResult;

    if (parsedResult.next_cursor) {
      const additionalUsers = await getAssociatedUsers(type, parsedResult.next_cursor);
      return [...parsedResult.ids, ...additionalUsers];
    }

    return parsedResult.ids;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUserFromID = async (userID: string): Promise<ITwitterUser | null> => {
  try {
    const result = await doGetRequest(`users/lookup.json?stringify_ids=true&user_id=${userID}`);

    const parsedResult = result as ITwitterUser[];
    return parsedResult[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const handleFriendship = async (
  userID: string,
  type: 'create' | 'destroy',
): Promise<ITwitterUser | null> => {
  try {
    const result = await doPostRequest(`friendships/${type}.json?user_id=${userID}`);

    return result as ITwitterUser;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getTweetCollection = async (
  userID: string,
  count: number = 50,
  includeRetweets = true,
): Promise<ITweet[]> => {
  try {
    const result = await doGetRequest(
      `statuses/user_timeline.json?user_id=${userID}&count=${count}&exclude_replies=true&include_rts=${includeRetweets}`,
    );

    return result as ITweet[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getTweetsFromSearch = async (
  query: string,
  count: number = 100,
): Promise<ITweet[]> => {
  try {
    const result = await doGetRequest(
      `search/tweets.json?q=${query}&count=${count}&lang=en&include_entities=false&tweet_mode=extended`,
    );

    return result.statuses as ITweet[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const likeTweetGivenID = async (tweetID: string): Promise<void> => {
  try {
    await doPostRequest(`favorites/create.json?id=${tweetID}`);
  } catch (err) {
    console.error(err);
  }
};
