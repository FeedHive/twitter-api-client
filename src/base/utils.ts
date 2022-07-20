export const createParams = (params?: { [key: string]: any }, exclude?: string[]) => {
  if (!params) {
    return '';
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (exclude?.includes(key)) {
      return;
    }

    if (typeof value === 'boolean') {
      searchParams.append(key, value ? 'true' : 'false');
      return;
    }

    searchParams.append(key, `${value}`);
  });

  return `?${searchParams.toString()}`;
};

export const generateHash = (token: string): string => {
  const seed = 56852;

  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;

  for (let i = 0, ch; i < token.length; i++) {
    ch = token.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
};

export const formatURL = (url: string): string => {
  return url
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
};

export const parse = <T>(body: string): T => {
  let parsed = undefined;

  try {
    parsed = JSON.parse(body);
  } catch (error) {}

  if (parsed) {
    return parsed;
  }

  try {
    parsed = JSON.parse('{"' + decodeURI(body).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  } catch (error) {}

  if (parsed) {
    return parsed;
  }

  return (body as any) as T;
};
