const BASE_URL_V1 = 'https://api.twitter.com/1.1';

export const formatURL = (url: string): string => {
  const formatted = url
    .replace(/\!/g, '%21')
    .replace(/\'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');

  return `${BASE_URL_V1}/${formatted}`;
};
