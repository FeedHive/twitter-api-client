import { URLSearchParams } from 'url';

export const createParams = (params: { [key: string]: any }) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      searchParams.append(key, value ? 'true' : 'false');
    }

    searchParams.append(key, `${value}`);
  });

  return `?${searchParams.toString()}`;
};
