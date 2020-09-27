import sizeof from 'object-sizeof';
import { generateHash } from './utils';

interface ICacheEntry {
  added: Date;
  data: any;
}

const windowSessionStorage = typeof sessionStorage !== 'undefined' ? sessionStorage : undefined;

class Cache {
  private ttl: number;
  private maxByteSize: number;
  private cache = new Map<string, ICacheEntry>();

  constructor(ttl = 360, maxByteSize = 16000000) {
    this.ttl = ttl;
    this.maxByteSize = maxByteSize;
  }

  public add(query: string, data: any) {
    const hashedKey = generateHash(query);

    const added = new Date();
    const entry = {
      added,
      data,
    };

    this.cache.set(hashedKey, entry);
    windowSessionStorage?.setItem(hashedKey, JSON.stringify(entry));
    this.clearSpace();
  }

  public get(query: string) {
    const hashedKey = generateHash(query);

    if (!this.has(query)) {
      return null;
    }

    try {
      const entry = this.cache.get(hashedKey);

      if (!entry) {
        const sessionData = windowSessionStorage?.getItem(hashedKey);

        if (!sessionData) {
          return;
        }

        return JSON.parse(sessionData);
      }

      return entry.data;
    } catch (error) {
      return null;
    }
  }

  public has(query: string) {
    const hashedKey = generateHash(query);

    try {
      const now = new Date();
      let data = this.cache.get(hashedKey);

      if (!data) {
        const sessionData = windowSessionStorage?.getItem(hashedKey);

        if (!sessionData) {
          return false;
        }

        data = JSON.parse(sessionData) as ICacheEntry;
      }

      const entryAdded = new Date(data.added);

      if (now.getTime() > entryAdded.getTime() + this.ttl * 1000) {
        windowSessionStorage?.removeItem(hashedKey);
        this.cache.delete(hashedKey);
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  private clearSpace() {
    const cacheArray = Array.from(this.cache);

    if (sizeof(cacheArray) < this.maxByteSize) {
      return;
    }

    cacheArray.sort((a, b) => a[1].added.getTime() - b[1].added.getTime());

    const [, ...reducedCacheArray] = cacheArray;

    this.cache = new Map<string, ICacheEntry>(reducedCacheArray);
    this.clearSpace();
  }
}

export default Cache;
