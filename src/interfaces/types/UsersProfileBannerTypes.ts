export default interface UsersProfileBanner {
  sizes: Sizes;
}

export interface Sizes {
  ipad: Ipad;
  ipad_retina: Ipad;
  web: Ipad;
  web_retina: Ipad;
  mobile: Ipad;
  mobile_retina: Ipad;
  '300x100': Ipad;
  '600x200': Ipad;
  '1500x500': Ipad;
}

export interface Ipad {
  h: number;
  w: number;
  url: string;
}

