import OAuth from 'oauth';
import IClientOptions from './IClientOptions';
import Cache from './Cache';
import { formatURL } from './utils';

let oauth: OAuth.OAuth;
let cache: Cache;
let credentials: IClientOptions & { [key: string]: any };

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

export const updateOptions = (options: Partial<IClientOptions>) => {
  const { apiKey, apiSecret, ...rest } = options;
  const cleanOptions = rest as { [key: string]: any };

  Object.keys(cleanOptions).forEach((key: string) => {
    if (cleanOptions[key]) {
      credentials[key] = cleanOptions[key];
    }
  });
};

export const doGetRequest = async <T>(url: string): Promise<T> => {
  if (!oauth) {
    throw Error('Unable to make request. Authentication has not been established');
  }

  if (cache?.has(url)) {
    return cache.get(url);
  }

  return new Promise((resolve, reject) => {
    if (!credentials.accessToken || !credentials.accessTokenSecret) {
      reject(new Error('Unable to make request. Authentication has not been established'));
      return;
    }

    const formattedUrl = formatURL(url);

    oauth.get(
      formattedUrl,
      credentials.accessToken,
      credentials.accessTokenSecret,
      (err: { statusCode: number; data?: any }, body?: string | Buffer) => {
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

export const doPostRequest = async <T>(url: string, body?: any): Promise<T> => {
  if (!oauth || !credentials) {
    throw Error('Unable to make request. Authentication has not been established');
  }

  return new Promise((resolve, reject) => {
    if (!credentials.accessToken || !credentials.accessTokenSecret) {
      reject(new Error('Unable to make request. Authentication has not been established'));
      return;
    }

    const formattedUrl = formatURL(url);

    oauth.post(
      formattedUrl,
      credentials.accessToken,
      credentials.accessTokenSecret,
      body,
      'application/x-www-form-urlencoded',
      (err: { statusCode: number; data?: any }, body?: string | Buffer) => {
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
