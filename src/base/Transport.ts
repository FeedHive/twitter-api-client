import OAuth from 'oauth';
import IClientOptions from './IClientOptions';
import Cache from './Cache';
import { formatURL } from './utils';

class Transport {
  private oauth: OAuth.OAuth;
  private cache?: Cache;
  private credentials: IClientOptions & { [key: string]: any };
  
  constructor(options: IClientOptions) {
    this.credentials = options;
    this.oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      this.credentials.apiKey,
      this.credentials.apiSecret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

    if (!options?.disableCache) {
      this.cache = new Cache(options?.ttl, options.maxByteSize);
    }
  }

  public updateOptions(options: Partial<IClientOptions>) {
    const { apiKey, apiSecret, ...rest } = options;
    const cleanOptions = rest as { [key: string]: any };

    Object.keys(cleanOptions).forEach((key: string) => {
      if (cleanOptions[key]) {
        this.credentials[key] = cleanOptions[key];
      }
    });
  }

  public async doGetRequest<T>(url: string): Promise<T> {
    if (!this.oauth) {
      throw Error(
        'Unable to make request. Authentication has not been established'
      );
    }

    if (this.cache?.has(url)) {
      return this.cache.get(url);
    }

    return new Promise((resolve, reject) => {
      if (
        !this.credentials.accessToken ||
        !this.credentials.accessTokenSecret
      ) {
        reject(
          new Error(
            'Unable to make request. Authentication has not been established'
          )
        );
        return;
      }

      const formattedUrl = formatURL(url);

      this.oauth.get(
        formattedUrl,
        this.credentials.accessToken,
        this.credentials.accessTokenSecret,
        (err: { statusCode: number; data?: any }, body?: string | Buffer) => {
          if (err) {
            reject(err);
            return;
          }

          if (!body) {
            return;
          }

          const result = JSON.parse(body.toString());

          this.cache?.add(url, result);
          resolve(result);
        }
      );
    });
  }

  public async doPostRequest<T>(url: string, body?: any): Promise<T> {
    if (!this.oauth || !this.credentials) {
      throw Error(
        'Unable to make request. Authentication has not been established'
      );
    }

    return new Promise((resolve, reject) => {
      if (
        !this.credentials.accessToken ||
        !this.credentials.accessTokenSecret
      ) {
        reject(
          new Error(
            'Unable to make request. Authentication has not been established'
          )
        );
        return;
      }

      const formattedUrl = formatURL(url);

      this.oauth.post(
        formattedUrl,
        this.credentials.accessToken,
        this.credentials.accessTokenSecret,
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
        }
      );
    });
  }
}

export default Transport;
