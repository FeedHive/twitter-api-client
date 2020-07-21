export default interface IClientOptions {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  accessTokenSecret: string;
  ttl?: number;
  maxByteSize?: number;
  disableCache?: boolean;
}
