import OAuth from 'oauth';
import { IncomingMessage } from 'http';
import IAPICredentials from '../interfaces/IAPICredentials';
import { formatURL } from '../utils/formatURL';

let oauth: OAuth.OAuth;
let credentials: IAPICredentials;

export const setCredentials = (apiCredentials: IAPICredentials) => {
  if (!credentials) {
    credentials = apiCredentials;
  }

  if (!oauth) {
    oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      credentials.apiKey,
      credentials.apiSecret,
      '1.0A',
      null,
      'HMAC-SHA1',
    );
  }
};

export const doGetRequest = async (url: string): Promise<string | Buffer> => {
  if (!oauth || !credentials) {
    throw Error('Unable to make request. Authentication has not been established');
  }

  return new Promise((resolve, reject) => {
    const formattedUrl = formatURL(url);

    oauth.get(
      formattedUrl,
      credentials.accessToken,
      credentials.accessTokenSecret,
      (
        err: { statusCode: number; data?: any },
        body?: string | Buffer,
        response?: IncomingMessage,
      ) => {
        if (err) {
          reject(err);
        }

        if (response?.statusCode !== 200) {
          reject(`Response code: ${response?.statusCode}`);
        }

        resolve(body);
      },
    );
  });
};

export const doPostRequest = async (url: string, body?: any): Promise<string | Buffer> => {
  if (!oauth || !credentials) {
    throw Error('Unable to make request. Authentication has not been established');
  }

  return new Promise((resolve, reject) => {
    const formattedUrl = formatURL(url);

    oauth.post(
      formattedUrl,
      credentials.accessToken,
      credentials.accessTokenSecret,
      body,
      'application/x-www-form-urlencoded',
      (
        err: { statusCode: number; data?: any },
        body?: string | Buffer,
        response?: IncomingMessage,
      ) => {
        if (err) {
          reject(err);
        }

        if (response?.statusCode !== 200) {
          reject(`Response code: ${response?.statusCode}`);
        }

        resolve(body);
      },
    );
  });
};
