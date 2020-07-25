import { URLSearchParams } from 'url';

export const createParams = (params?: { [key: string]: any }) => {
  if (!params) {
    return '';
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      searchParams.append(key, value ? 'true' : 'false');
    }

    searchParams.append(key, `${value}`);
  });

  return `?${searchParams.toString()}`;
};
