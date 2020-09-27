import FakeTimers from '@sinonjs/fake-timers';
import Cache from '../base/Cache';

const clock = FakeTimers.install();

describe('requests - GitHubCache', () => {
  let cache = new Cache(100);

  beforeEach(() => {
    cache = new Cache(100);
  });

  it('caches result from query', async () => {
    const result = { mock: 'result' };
    cache.add('mock-query', result);

    const cachedResult = cache.get('mock-query');
    expect(cachedResult).toEqual(result);
  });

  it('does not use cache when ttl has expired', () => {
    const result = { mock: 'result' };
    cache.add('mock-query', result);

    const hasDataBeforeExpire = cache.has('mock-query');
    expect(hasDataBeforeExpire).toBeTruthy();

    clock.tick(101 * 1000);

    const hasDataAfterExpire = cache.has('mock-query');
    expect(hasDataAfterExpire).toBeFalsy();
  });
});
