import OAuth from 'oauth';
import { IncomingMessage } from 'http';
import IClientOptions from '../interfaces/IClientOptions';
import { formatURL } from '../utils/formatURL';
import Cache from '../services/Cache';

let oauth: OAuth.OAuth;
let cache: Cache;
let credentials: IClientOptions;

export const setOptions = (options: IClientOptions) => {
  if (!credentials) {
    credentials = options;
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

  if (!options?.disableCache) {
    cache = new Cache(options?.ttl, options.maxByteSize);
  }
};

export const doGetRequest = async (url: string) => {
  if (!oauth || !credentials) {
    throw Error('Unable to make request. Authentication has not been established');
  }

  if (cache?.has(url)) {
    return cache.get(url);
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
      ) => {
        if (err) {
          reject(err);
          return;
        }

        if (!body) {
          return;
        }

        const result = JSON.parse(body.toString());

        cache?.add(url, result);
        resolve(result);
      },
    );
  });
};

export const doPostRequest = async (url: string, body?: any) => {
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
          return;
        }

        if (!body) {
          return;
        }

        const result = JSON.parse(body.toString());
        resolve(result);
      },
    );
  });
};
