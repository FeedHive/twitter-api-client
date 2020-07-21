export type UserIdOrScreenName = RequireOneOf<
  { user_id?: string; screen_name?: string },
  'user_id' | 'screen_name'
>;

export interface IParameterWithId {
  id: string;
}

export interface IParameterWithQuery {
  query: string;
}

export type RequireOneOf<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
