export default interface FriendshipsShow {
  relationship: Relationship;
}

export interface Relationship {
  source: Source;
  target: Target;
}

export interface Target {
  id: number;
  id_str: string;
  screen_name: string;
  following: boolean;
  followed_by: boolean;
  following_received?: any;
  following_requested?: any;
}

export interface Source {
  id: number;
  id_str: string;
  screen_name: string;
  following: boolean;
  followed_by: boolean;
  live_following: boolean;
  following_received?: any;
  following_requested?: any;
  notifications_enabled?: any;
  can_dm: boolean;
  blocking?: any;
  blocked_by?: any;
  muting?: any;
  want_retweets?: any;
  all_replies?: any;
  marked_spam?: any;
}

