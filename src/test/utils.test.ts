import { parse } from '../base/utils';
import {removeHttpVerbs,startWithHttpVerb} from '../utils/utils'

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
  it('Removes supported http verbs from string',()=>{
    const query = 'DELETE a'
    const result = removeHttpVerbs(query);
    expect(result).toEqual('a')
  })
  it('Keep untouched a string without the supported http verbs',()=>{
    const query = 'PUT a'
    const result = removeHttpVerbs(query);
    expect(result).toEqual(query)
  })
  it('Check a string that have an http verb',()=>{
    const query = 'DELETE a'
    const result = startWithHttpVerb(query);
    expect(result).toEqual(true)
  })
  it('Check a string that doesnt have an http verb',()=>{
    const query = 'PUT a'
    const result = startWithHttpVerb(query);
    expect(result).toEqual(false)
  })
  it('returns false if text has a verb elsewhere but the start',()=>{
    const query = 'a GET'
    const result = startWithHttpVerb(query);
    expect(result).toEqual(false)
  })
});


