export default interface IAccountProfileBanner {
  sizes: Sizes;
}

export interface Ipad {
  h: number;
  w: number;
  url: string;
}

export interface IpadRetina {
  h: number;
  w: number;
  url: string;
}

export interface Web {
  h: number;
  w: number;
  url: string;
}

export interface WebRetina {
  h: number;
  w: number;
  url: string;
}

export interface Mobile {
  h: number;
  w: number;
  url: string;
}

export interface MobileRetina {
  h: number;
  w: number;
  url: string;
}

export interface d300x1002 {
  h: number;
  w: number;
  url: string;
}

export interface d600x2002 {
  h: number;
  w: number;
  url: string;
}

export interface d1500x5002 {
  h: number;
  w: number;
  url: string;
}

export interface Sizes {
  'ipad': Ipad;
  'ipad_retina': IpadRetina;
  'web': Web;
  'web_retina': WebRetina;
  'mobile': Mobile;
  'mobile_retina': MobileRetina;
  '300x100': d300x1002;
  '600x200': d600x2002;
  '1500x500': d1500x5002;
}
