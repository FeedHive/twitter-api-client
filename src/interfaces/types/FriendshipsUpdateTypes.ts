export default interface FriendshipsUpdate {
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
  following_received: boolean;
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
  following_requested: boolean;
  notifications_enabled: boolean;
  can_dm: boolean;
  blocking: boolean;
  blocked_by: boolean;
  muting: boolean;
  want_retweets: boolean;
  all_replies: boolean;
  marked_spam: boolean;
}

