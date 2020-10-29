import { parse } from '../base/utils';

describe('Utils', () => {
  it('should parse object regularly', () => {
    const query = { test: 'test' };

    const result = parse<any>(JSON.stringify(query));

    expect(result).toEqual(query);
  });

  it('should transform query result correctly', () => {
    const query = 'oauth_token=123&oauth_token_secret=456&oauth_callback_confirmed=true';

    const result = parse(query);

    expect(result).toEqual({
      oauth_token: '123',
      oauth_token_secret: '456',
      oauth_callback_confirmed: 'true',
    });
  });

  it('should return string if transformation fails', () => {
    const query = '1234abcd';

    const result = parse(query);

    expect(result).toBe(query);
  });
});