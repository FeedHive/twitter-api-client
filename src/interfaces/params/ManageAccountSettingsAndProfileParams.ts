export interface SavedSearchesShowByIdParams {
  /**
  * The ID of the saved search.
  */
  id: number;
}

export interface UsersProfileBannerParams {
  /**
  * The ID of the user for whom to return results. Helpful for disambiguating when a valid user ID is also a valid screen name.
  */
  user_id?: number;
  /**
  * The screen name of the user for whom to return results. Helpful for disambiguating when a valid screen name is also a user ID.
  */
  screen_name?: string;
}

export interface AccountUpdateProfileParams {
  /**
  * Full name associated with the profile.
  */
  name?: string;
  /**
  * URL associated with the profile. Will be prepended with http:// if not present.
  */
  url?: string;
  /**
  * The city or country describing where the user of the account is located. The contents are not normalized or geocoded in any way.
  */
  location?: string;
  /**
  * A description of the user owning the account.
  */
  description?: string;
  /**
  * The entities node will not be included when set to false .
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 statuses will not be included in the returned user object.
  */
  skip_status?: boolean;
}

export interface AccountUpdateProfileBackgroundImageRetiredParams {
  /**
  * The background image for the profile, base64-encoded. Must be a valid GIF, JPG, or PNG image of less than 800 kilobytes in size. Images with width larger than 2048 pixels will be forcibly scaled down. The image must be provided as raw multipart data, not a URL.
  */
  image?: number;
  /**
  * Whether or not to tile the background image. If set to true , t or 1 the background image will be displayed tiled. The image will not be tiled otherwise.
  */
  tile?: number;
  /**
  * The entities node will not be included when set to false .
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 statuses will not be included in the returned user objects.
  */
  skip_status?: boolean;
  /**
  * Specify the media to use as the background image. More information on upload of media is available here .
  */
  media_id?: number;
}

export interface AccountUpdateProfileBannerParams {
  /**
  * The Base64-encoded or raw image data being uploaded as the user's new profile banner.
  */
  banner: number;
  /**
  * The width of the preferred section of the image being uploaded in pixels. Use with height , offset_left , and offset_top to select the desired region of the image to use.
  */
  width?: number;
  /**
  * The height of the preferred section of the image being uploaded in pixels. Use with width , offset_left , and offset_top to select the desired region of the image to use.
  */
  height?: number;
  /**
  * The number of pixels by which to offset the uploaded image from the left. Use with height , width , and offset_top to select the desired region of the image to use.
  */
  offset_left?: number;
  /**
  * The number of pixels by which to offset the uploaded image from the top. Use with height , width , and offset_left to select the desired region of the image to use.
  */
  offset_top?: number;
}

export interface AccountUpdateProfileImageParams {
  /**
  * The avatar image for the profile, base64-encoded. Must be a valid GIF, JPG, or PNG image of less than 700 kilobytes in size. Images with width larger than 400 pixels will be scaled down. Animated GIFs will be converted to a static GIF of the first frame, removing the animation.
  */
  image: number;
  /**
  * The entities node will not be included when set to false .
  */
  include_entities?: boolean;
  /**
  * When set to either true , t or 1 statuses will not be included in the returned user objects.
  */
  skip_status?: boolean;
}

export interface SavedSearchesCreateParams {
  /**
  * The query of the search the user would like to save.
  */
  query: number;
}

export interface SavedSearchesDestroyByIdParams {
  /**
  * The ID of the saved search.
  */
  id: number;
}
