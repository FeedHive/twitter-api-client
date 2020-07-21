import { doGetRequest, doPostRequest } from './base';
import IAccountSettings from '../interfaces/IAccountSettings';
import ISavedSearch from '../interfaces/ISavedSearch';
import {
  UserIdOrScreenName,
  IParameterWithId,
  IParameterWithQuery,
} from '../interfaces/GenericTypes';
import IAccountProfileBanner from '../interfaces/IAccountProfileBanner';
import ITwitterUser from '../interfaces/ITwitterUser';

export interface IAccountVerifyCrendetialsParams {
  include_entities?: boolean;
  skip_status?: boolean;
  include_email?: boolean;
}

export interface IAccountSettingsParams {
  sleep_time_enabled: true;
  start_sleep_time: number;
  end_sleep_time: number;
  trend_location_woeid: number;
  time_zone: string;
  lang: string;
}

export interface IAccountUpdateProfileParams {
  name?: string;
  url?: string;
  location?: string;
  description?: string;
  include_entities?: boolean;
  skip_status?: boolean;
}

export interface IAccountUpdateProfileBannerParams {
  banner: string;
  width?: number;
  height?: number;
  offset_left?: number;
  offset_top?: number;
}

export interface IAccountUpdateProfileImageParams {
  image: string;
  include_entities?: boolean;
  skip_status?: boolean;
}

export const accountSettings = async () => {
  const result = await doGetRequest<IAccountSettings>('account/settings.json');
  return result;
};

export const accountVerifyCredentials = async (parameters?: IAccountVerifyCrendetialsParams) => {
  const params = new URLSearchParams();

  if (parameters) {
    Object.entries(parameters).forEach(([key, value]) => {
      if (value) {
        params.append(key, 'true');
      }
    });
  }

  const result = await doGetRequest<ITwitterUser>(
    `account/verify_credentials.json?${params.toString()}`,
  );
  return result;
};

export const usersProfileBanner = async (parameters: UserIdOrScreenName) => {
  const params = new URLSearchParams();

  if (parameters?.user_id) {
    params.append('user_id', parameters.user_id);
  }

  if (!parameters?.user_id && parameters?.screen_name) {
    params.append('screen_name', parameters.screen_name);
  }

  const result = await doGetRequest<IAccountProfileBanner>(
    `users/profile_banner.json?${params.toString()}`,
  );

  return result;
};

export const savedSearchesList = async () => {
  return await doGetRequest<ISavedSearch[]>('saved_searches/list.json');
};

export const savedSearchesShow = async (parameters: IParameterWithId) => {
  return await doGetRequest<ISavedSearch>(`saved_searches/show/${parameters.id}.json`);
};

export const accountRemoveProfileBanner = async () => {
  await doPostRequest('account/remove_profile_banner.json');
};

export const accountUpdateSettings = async (parameters?: IAccountSettingsParams) => {
  const params = new URLSearchParams();

  if (parameters) {
    Object.entries(parameters).forEach(([key, value]) => {
      if (value && typeof value === 'boolean') {
        params.append(key, 'true');
        return;
      }

      params.append(key, `${value}`);
    });
  }

  return await doPostRequest<IAccountSettings>(`account/settings.json?${params.toString()}`);
};

export const accountUpdateProfile = async (parameters?: IAccountUpdateProfileParams) => {
  const params = new URLSearchParams();

  if (parameters) {
    Object.entries(parameters).forEach(([key, value]) => {
      if (value && typeof value === 'boolean') {
        params.append(key, 'true');
        return;
      }

      params.append(key, `${value}`);
    });
  }

  return await doPostRequest<ITwitterUser>(`account/update_profile.json?${params.toString()}`);
};

export const accountUpdateProfileBanner = async (parameters: IAccountUpdateProfileBannerParams) => {
  const params = new URLSearchParams();

  if (parameters) {
    Object.entries(parameters).forEach(([key, value]) => {
      if (value && typeof value === 'boolean') {
        params.append(key, 'true');
        return;
      }

      params.append(key, `${value}`);
    });
  }

  return await doPostRequest(`account/update_profile_banner.json?${params.toString()}`);
};

export const accountUpdateProfileImage = async (parameters: IAccountUpdateProfileImageParams) => {
  const params = new URLSearchParams();

  if (parameters) {
    Object.entries(parameters).forEach(([key, value]) => {
      if (value && typeof value === 'boolean') {
        params.append(key, 'true');
        return;
      }

      params.append(key, `${value}`);
    });
  }

  return await doPostRequest<ITwitterUser>(
    `account/update_profile_image.json?${params.toString()}`,
  );
};

export const accountSavedSearchesCreate = async (parameters: IParameterWithQuery) => {
  return doPostRequest<ISavedSearch>(`saved_searches/create.json?query=${parameters.query}`);
};

export const accountSavedSearchesDestroy = async (parameters: IParameterWithId) => {
  return doPostRequest<ISavedSearch>(`saved_searches/destroy/${parameters.id}.json`);
};
