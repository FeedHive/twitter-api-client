import { doGetRequest, doPostRequest } from '../base/base';
import { createParams } from '../utils/utils';

import {
  ListsListParams,
  ListsMembersShowParams,
  ListsMembershipsParams,
  ListsOwnershipsParams,
  ListsShowParams,
  ListsStatusesParams,
  ListsSubscribersParams,
  ListsSubscribersShowParams,
  ListsSubscriptionsParams,
  ListsCreateParams,
  ListsDestroyParams,
  ListsMembersCreateParams,
  ListsMembersCreateAllParams,
  ListsMembersDestroyParams,
  ListsMembersDestroyAllParams,
  ListsSubscribersCreateParams,
  ListsSubscribersDestroyParams,
  ListsUpdateParams,
} from '../interfaces/params/CreateAndManageListsParams';

import {
  FriendshipsLookupParams,
  FriendshipsNoRetweetsIdsParams,
  FriendshipsShowParams,
  UsersLookupParams,
  UsersSearchParams,
  UsersShowParams,
  FriendshipsCreateParams,
  FriendshipsDestroyParams,
  FriendshipsUpdateParams,
} from '../interfaces/params/FollowSearchAndGetUsersParams';

import {
  SavedSearchesShowByIdParams,
  UsersProfileBannerParams,
  AccountUpdateProfileParams,
  AccountUpdateProfileBackgroundImageRetiredParams,
  AccountUpdateProfileBannerParams,
  AccountUpdateProfileImageParams,
  SavedSearchesCreateParams,
  SavedSearchesDestroyByIdParams,
} from '../interfaces/params/ManageAccountSettingsAndProfileParams';

import {
  BlocksCreateParams,
  MutesUsersCreateParams,
  MutesUsersDestroyParams,
  UsersReportSpamParams,
} from '../interfaces/params/MuteBlockAndReportUsersParams';

import ListsList from '../interfaces/types/ListsListTypes';
import ListsMembers from '../interfaces/types/ListsMembersTypes';
import ListsMembersShow from '../interfaces/types/ListsMembersShowTypes';
import ListsMemberships from '../interfaces/types/ListsMembershipsTypes';
import ListsOwnerships from '../interfaces/types/ListsOwnershipsTypes';
import ListsShow from '../interfaces/types/ListsShowTypes';
import ListsStatuses from '../interfaces/types/ListsStatusesTypes';
import ListsSubscribers from '../interfaces/types/ListsSubscribersTypes';
import ListsSubscribersShow from '../interfaces/types/ListsSubscribersShowTypes';
import ListsSubscriptions from '../interfaces/types/ListsSubscriptionsTypes';
import ListsCreate from '../interfaces/types/ListsCreateTypes';
import ListsDestroy from '../interfaces/types/ListsDestroyTypes';
import ListsSubscribersCreate from '../interfaces/types/ListsSubscribersCreateTypes';
import FollowersIds from '../interfaces/types/FollowersIdsTypes';
import FollowersList from '../interfaces/types/FollowersListTypes';
import FriendsIds from '../interfaces/types/FriendsIdsTypes';
import FriendsList from '../interfaces/types/FriendsListTypes';
import FriendshipsIncoming from '../interfaces/types/FriendshipsIncomingTypes';
import FriendshipsLookup from '../interfaces/types/FriendshipsLookupTypes';
import FriendshipsOutgoing from '../interfaces/types/FriendshipsOutgoingTypes';
import FriendshipsShow from '../interfaces/types/FriendshipsShowTypes';
import UsersLookup from '../interfaces/types/UsersLookupTypes';
import UsersSearch from '../interfaces/types/UsersSearchTypes';
import UsersShow from '../interfaces/types/UsersShowTypes';
import FriendshipsCreate from '../interfaces/types/FriendshipsCreateTypes';
import FriendshipsDestroy from '../interfaces/types/FriendshipsDestroyTypes';
import FriendshipsUpdate from '../interfaces/types/FriendshipsUpdateTypes';
import AccountSettings from '../interfaces/types/AccountSettingsTypes';
import SavedSearchesList from '../interfaces/types/SavedSearchesListTypes';
import SavedSearchesShowById from '../interfaces/types/SavedSearchesShowByIdTypes';
import UsersProfileBanner from '../interfaces/types/UsersProfileBannerTypes';
import AccountUpdateProfile from '../interfaces/types/AccountUpdateProfileTypes';
import AccountUpdateProfileBackgroundImageRetired from '../interfaces/types/AccountUpdateProfileBackgroundImageRetiredTypes';
import AccountUpdateProfileImage from '../interfaces/types/AccountUpdateProfileImageTypes';
import SavedSearchesCreate from '../interfaces/types/SavedSearchesCreateTypes';
import SavedSearchesDestroyById from '../interfaces/types/SavedSearchesDestroyByIdTypes';
import BlocksIds from '../interfaces/types/BlocksIdsTypes';
import BlocksList from '../interfaces/types/BlocksListTypes';
import MutesUsersIds from '../interfaces/types/MutesUsersIdsTypes';
import MutesUsersList from '../interfaces/types/MutesUsersListTypes';
import BlocksCreate from '../interfaces/types/BlocksCreateTypes';
import MutesUsersCreate from '../interfaces/types/MutesUsersCreateTypes';
import MutesUsersDestroy from '../interfaces/types/MutesUsersDestroyTypes';
import UsersReportSpam from '../interfaces/types/UsersReportSpamTypes';

class AccountsAndUsersClient {
  /**
   *  Returns all lists the authenticating or specified user subscribes to, including their own. The user is specified using the user_id or screen_name parameters. If no user is given, the authenticating user is used.A maximum of 100 results will be returned by this call. Subscribed lists are returned first, followed by owned lists. This means that if a user subscribes to 90 lists and owns 20 lists, this method returns 90 subscriptions and 10 owned lists. The reverse method returns owned lists first, so with reverse=true, 20 owned lists and 80 subscriptions would be returned. If your goal is to obtain every list a user owns or subscribes to, use GET lists / ownerships and/or GET lists / subscriptions instead.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-list
   * @param parameters
   */
  public async listsList(parameters?: ListsListParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsList[]>('https://api.twitter.com/1.1/lists/list.json' + params);
  }

  /**
   *  members/* Returns the members of the specified list. Private list members will only be shown if the authenticated user owns the specified list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-members
   */
  public async listsMembers() {
    return await doGetRequest<ListsMembers>('https://api.twitter.com/1.1/lists/members.json');
  }

  /**
   *  Check if the specified user is a member of the specified list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-members-show
   * @param parameters
   */
  public async listsMembersShow(parameters: ListsMembersShowParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsMembersShow>('https://api.twitter.com/1.1/lists/members/show.json' + params);
  }

  /**
   *  Returns the lists the specified user has been added to. If user_id or screen_name are not provided, the memberships for the authenticating user are returned.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-memberships
   * @param parameters
   */
  public async listsMemberships(parameters?: ListsMembershipsParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsMemberships>('https://api.twitter.com/1.1/lists/memberships.json' + params);
  }

  /**
   *  Returns the lists owned by the specified Twitter user. Private lists will only be shown if the authenticated user is also the owner of the lists.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-ownerships
   * @param parameters
   */
  public async listsOwnerships(parameters?: ListsOwnershipsParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsOwnerships>('https://api.twitter.com/1.1/lists/ownerships.json' + params);
  }

  /**
   *  Returns the specified list. Private lists will only be shown if the authenticated user owns the specified list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-show
   * @param parameters
   */
  public async listsShow(parameters: ListsShowParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsShow>('https://api.twitter.com/1.1/lists/show.json' + params);
  }

  /**
   *  Returns a timeline of tweets authored by members of the specified list. Retweets are included by default. Use the include_rts=false parameter to omit retweets.Embedded Timelines is a great way to embed list timelines on your website.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-statuses
   * @param parameters
   */
  public async listsStatuses(parameters: ListsStatusesParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsStatuses[]>('https://api.twitter.com/1.1/lists/statuses.json' + params);
  }

  /**
   *  subscribers/* Returns the subscribers of the specified list. Private list subscribers will only be shown if the authenticated user owns the specified list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers
   * @param parameters
   */
  public async listsSubscribers(parameters: ListsSubscribersParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsSubscribers>('https://api.twitter.com/1.1/lists/subscribers.json' + params);
  }

  /**
   *  Check if the specified user is a subscriber of the specified list. Returns the user if they are a subscriber.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers-show
   * @param parameters
   */
  public async listsSubscribersShow(parameters: ListsSubscribersShowParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsSubscribersShow>('https://api.twitter.com/1.1/lists/subscribers/show.json' + params);
  }

  /**
   *  Obtain a collection of the lists the specified user is subscribed to, 20 lists per page by default. Does not include the user's own lists.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscriptions
   * @param parameters
   */
  public async listsSubscriptions(parameters?: ListsSubscriptionsParams) {
    const params = createParams(parameters);
    return await doGetRequest<ListsSubscriptions>('https://api.twitter.com/1.1/lists/subscriptions.json' + params);
  }

  /**
   *  Creates a new list for the authenticated user. Note that you can create up to 1000 lists per account.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-create
   * @param parameters
   */
  public async listsCreate(parameters: ListsCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<ListsCreate>('https://api.twitter.com/1.1/lists/create.json' + params);
  }

  /**
   *  Deletes the specified list. The authenticated user must own the list to be able to destroy it.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-destroy
   * @param parameters
   */
  public async listsDestroy(parameters: ListsDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest<ListsDestroy>('https://api.twitter.com/1.1/lists/destroy.json' + params);
  }

  /**
   *  Add a member to a list. The authenticated user must own the list to be able to add members to it. Note that lists cannot have more than 5,000 members.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create
   * @param parameters
   */
  public async listsMembersCreate(parameters: ListsMembersCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/lists/members/create.json' + params);
  }

  /**
   *  Adds multiple members to a list, by specifying a comma-separated list of member ids or screen names. The authenticated user must own the list to be able to add members to it. Note that lists can't have more than 5,000 members, and you are limited to adding up to 100 members to a list at a time with this method.Please note that there can be issues with lists that rapidly remove and add memberships. Take care when using these methods such that you are not too rapidly switching between removals and adds on the same list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create_all
   * @param parameters
   */
  public async listsMembersCreateAll(parameters: ListsMembersCreateAllParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/lists/members/create_all.json' + params);
  }

  /**
   *  Removes the specified member from the list. The authenticated user must be the list's owner to remove members from the list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy
   * @param parameters
   */
  public async listsMembersDestroy(parameters?: ListsMembersDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/lists/members/destroy.json' + params);
  }

  /**
   *  Removes multiple members from a list, by specifying a comma-separated list of member ids or screen names. The authenticated user must own the list to be able to remove members from it. Note that lists can't have more than 500 members, and you are limited to removing up to 100 members to a list at a time with this method.Please note that there can be issues with lists that rapidly remove and add memberships. Take care when using these methods such that you are not too rapidly switching between removals and adds on the same list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy_all
   * @param parameters
   */
  public async listsMembersDestroyAll(parameters: ListsMembersDestroyAllParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/lists/members/destroy_all.json' + params);
  }

  /**
   *  Subscribes the authenticated user to the specified list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-create
   * @param parameters
   */
  public async listsSubscribersCreate(parameters: ListsSubscribersCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<ListsSubscribersCreate>('https://api.twitter.com/1.1/lists/subscribers/create.json' + params);
  }

  /**
   *  Unsubscribes the authenticated user from the specified list.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-destroy
   * @param parameters
   */
  public async listsSubscribersDestroy(parameters: ListsSubscribersDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/lists/subscribers/destroy.json' + params);
  }

  /**
   *  Updates the specified list. The authenticated user must own the list to be able to update it.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-update
   * @param parameters
   */
  public async listsUpdate(parameters: ListsUpdateParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/lists/update.json' + params);
  }

  /**
   *  Returns a cursored collection of user IDs for every user following the specified user.At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids
   */
  public async followersIds() {
    return await doGetRequest<FollowersIds>('https://api.twitter.com/1.1/followers/ids.json');
  }

  /**
   *  Returns a cursored collection of user objects for users following the specified user.At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
   */
  public async followersList() {
    return await doGetRequest<FollowersList>('https://api.twitter.com/1.1/followers/list.json');
  }

  /**
   *  Returns a cursored collection of user IDs for every user the specified user is following (otherwise known as their "friends").At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.This method is especially powerful when used in conjunction with GET users / lookup, a method that allows you to convert user IDs into full user objects in bulk.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids
   */
  public async friendsIds() {
    return await doGetRequest<FriendsIds>('https://api.twitter.com/1.1/friends/ids.json');
  }

  /**
   *  Returns a cursored collection of user objects for every user the specified user is following (otherwise known as their "friends").At this time, results are ordered with the most recent following first — however, this ordering is subject to unannounced change and eventual consistency issues. Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. See Using cursors to navigate collections for more information.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-list
   */
  public async friendsList() {
    return await doGetRequest<FriendsList>('https://api.twitter.com/1.1/friends/list.json');
  }

  /**
   *  Returns a collection of numeric IDs for every user who has a pending request to follow the authenticating user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-incoming
   */
  public async friendshipsIncoming() {
    return await doGetRequest<FriendshipsIncoming>('https://api.twitter.com/1.1/friendships/incoming.json');
  }

  /**
   *  Returns the relationships of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids provided. Values for connections can be: following, following_requested, followed_by, none, blocking, muting.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup
   * @param parameters
   */
  public async friendshipsLookup(parameters?: FriendshipsLookupParams) {
    const params = createParams(parameters);
    return await doGetRequest<FriendshipsLookup[]>('https://api.twitter.com/1.1/friendships/lookup.json' + params);
  }

  /**
   *  Returns a collection of user_ids that the currently authenticated user does not want to receive retweets from.Use POST friendships / update to set the "no retweets" status for a given user account on behalf of the current user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-no_retweets-ids
   * @param parameters
   */
  public async friendshipsNoRetweetsIds(parameters?: FriendshipsNoRetweetsIdsParams) {
    const params = createParams(parameters);
    return await doGetRequest('https://api.twitter.com/1.1/friendships/no_retweets/ids.json' + params);
  }

  /**
   *  Returns a collection of numeric IDs for every protected user for whom the authenticating user has a pending follow request.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-outgoing
   */
  public async friendshipsOutgoing() {
    return await doGetRequest<FriendshipsOutgoing>('https://api.twitter.com/1.1/friendships/outgoing.format');
  }

  /**
   *  Returns detailed information about the relationship between two arbitrary users.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show
   * @param parameters
   */
  public async friendshipsShow(parameters?: FriendshipsShowParams) {
    const params = createParams(parameters);
    return await doGetRequest<FriendshipsShow>('https://api.twitter.com/1.1/friendships/show.json' + params);
  }

  /**
   *  Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters.This method is especially useful when used in conjunction with collections of user IDs returned from GET friends / ids and GET followers / ids.GET users / show is used to retrieve a single user object.There are a few things to note when using this method. You must be following a protected user to be able to see their most recent status update. If you don't follow a protected user their status will be removed. The order of user IDs or screen names may not match the order of users in the returned array. If a requested user is unknown, suspended, or deleted, then that user will not be returned in the results list. If none of your lookup criteria can be satisfied by returning a user object, a HTTP 404 will be thrown. You are strongly encouraged to use a POST for larger requests. 
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup
   * @param parameters
   */
  public async usersLookup(parameters?: UsersLookupParams) {
    const params = createParams(parameters);
    return await doGetRequest<UsersLookup[]>('https://api.twitter.com/1.1/users/lookup.json' + params);
  }

  /**
   *  Provides a simple, relevance-based search interface to public user accounts on Twitter. Try querying by topical interest, full name, company name, location, or other criteria. Exact match searches are not supported.Only the first 1,000 matching results are available.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-search
   * @param parameters
   */
  public async usersSearch(parameters: UsersSearchParams) {
    const params = createParams(parameters);
    return await doGetRequest<UsersSearch[]>('https://api.twitter.com/1.1/users/search.json' + params);
  }

  /**
   *  Returns a variety of information about the user specified by the required user_id or screen_name parameter. The author's most recent Tweet will be returned inline when possible.GET users / lookup is used to retrieve a bulk collection of user objects.You must be following a protected user to be able to see their most recent Tweet. If you don't follow a protected user, the user's Tweet will be removed. A Tweet will not always be returned in the current_status field.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show
   * @param parameters
   */
  public async usersShow(parameters: UsersShowParams) {
    const params = createParams(parameters);
    return await doGetRequest<UsersShow>('https://api.twitter.com/1.1/users/show.json' + params);
  }

  /**
   *  Allows the authenticating user to follow (friend) the user specified in the ID parameter.Returns the followed user when successful. Returns a string describing the failure condition when unsuccessful. If the user is already friends with the user a HTTP 403 may be returned, though for performance reasons this method may also return a HTTP 200 OK message even if the follow relationship already exists.Actions taken in this method are asynchronous. Changes will be eventually consistent.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create
   * @param parameters
   */
  public async friendshipsCreate(parameters?: FriendshipsCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<FriendshipsCreate>('https://api.twitter.com/1.1/friendships/create.json' + params);
  }

  /**
   *  Allows the authenticating user to unfollow the user specified in the ID parameter.Returns the unfollowed user when successful. Returns a string describing the failure condition when unsuccessful.Actions taken in this method are asynchronous. Changes will be eventually consistent.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy
   * @param parameters
   */
  public async friendshipsDestroy(parameters?: FriendshipsDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest<FriendshipsDestroy>('https://api.twitter.com/1.1/friendships/destroy.json' + params);
  }

  /**
   *  Enable or disable Retweets and device notifications from the specified user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-update
   * @param parameters
   */
  public async friendshipsUpdate(parameters?: FriendshipsUpdateParams) {
    const params = createParams(parameters);
    return await doPostRequest<FriendshipsUpdate>('https://api.twitter.com/1.1/friendships/update.json' + params);
  }

  /**
   *  Returns settings (including current trend, geo and sleep time information) for the authenticating user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-settings
   */
  public async accountSettings() {
    return await doGetRequest<AccountSettings>('https://api.twitter.com/1.1/account/settings.json');
  }

  /**
   *  Returns the authenticated user's saved search queries.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-list
   */
  public async savedSearchesList() {
    return await doGetRequest<SavedSearchesList[]>('https://api.twitter.com/1.1/saved_searches/list.json');
  }

  /**
   *  Retrieve the information for the saved search represented by the given id. The authenticating user must be the owner of saved search ID being requested.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-show-id
   * @param parameters
   */
  public async savedSearchesShowById(parameters: SavedSearchesShowByIdParams) {
    const params = createParams(parameters);
    return await doGetRequest<SavedSearchesShowById>('https://api.twitter.com/1.1/saved_searches/show/:id.json' + params);
  }

  /**
   *  Returns a map of the available size variations of the specified user's profile banner. If the user has not uploaded a profile banner, a HTTP 404 will be served instead. This method can be used instead of string manipulation on the profile_banner_url returned in user objects as described in Profile Images and Banners.The profile banner data available at each size variant's URL is in PNG format.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-users-profile_banner
   * @param parameters
   */
  public async usersProfileBanner(parameters?: UsersProfileBannerParams) {
    const params = createParams(parameters);
    return await doGetRequest<UsersProfileBanner>('https://api.twitter.com/1.1/users/profile_banner.json' + params);
  }

  /**
   *  Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-remove_profile_banner
   */
  public async accountRemoveProfileBanner() {
    return await doPostRequest('https://api.twitter.com/1.1/account/remove_profile_banner.json');
  }

  /**
   *  Sets some values that users are able to set under the "Account" tab of their settings page. Only the parameters specified will be updated.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile
   * @param parameters
   */
  public async accountUpdateProfile(parameters?: AccountUpdateProfileParams) {
    const params = createParams(parameters);
    return await doPostRequest<AccountUpdateProfile>('https://api.twitter.com/1.1/account/update_profile.json' + params);
  }

  /**
   *  Updates the authenticating user's profile background image. This method can also be used to enable or disable the profile background image.Although each parameter is marked as optional, at least one of image or media_id must be provided when making this request.Learn more about the deprecation of this endpoint via our forum post.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_background_image
   * @param parameters
   */
  public async accountUpdateProfileBackgroundImageRetired(parameters?: AccountUpdateProfileBackgroundImageRetiredParams) {
    const params = createParams(parameters);
    return await doPostRequest<AccountUpdateProfileBackgroundImageRetired>('https://api.twitter.com/1.1/account/update_profile_background_image.json' + params);
  }

  /**
   *  Uploads a profile banner on behalf of the authenticating user. More information about sizing variations can be found in User Profile Images and Banners and GET users / profile_banner.Profile banner images are processed asynchronously. The profile_banner_url and its variant sizes will not necessary be available directly after upload.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_banner
   * @param parameters
   */
  public async accountUpdateProfileBanner(parameters: AccountUpdateProfileBannerParams) {
    const params = createParams(parameters);
    return await doPostRequest('https://api.twitter.com/1.1/account/update_profile_banner.json' + params);
  }

  /**
   *  Updates the authenticating user's profile image. Note that this method expects raw multipart data, not a URL to an image.This method asynchronously processes the uploaded file before updating the user's profile image URL. You can either update your local cache the next time you request the user's information, or, at least 5 seconds after uploading the image, ask for the updated URL using GET users / show.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_image
   * @param parameters
   */
  public async accountUpdateProfileImage(parameters: AccountUpdateProfileImageParams) {
    const params = createParams(parameters);
    return await doPostRequest<AccountUpdateProfileImage>('https://api.twitter.com/1.1/account/update_profile_image.json' + params);
  }

  /**
   *  Create a new saved search for the authenticated user. A user may only have 25 saved searches.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-create
   * @param parameters
   */
  public async savedSearchesCreate(parameters: SavedSearchesCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<SavedSearchesCreate>('https://api.twitter.com/1.1/saved_searches/create.json' + params);
  }

  /**
   *  Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-destroy-id
   * @param parameters
   */
  public async savedSearchesDestroyById(parameters: SavedSearchesDestroyByIdParams) {
    const params = createParams(parameters);
    return await doPostRequest<SavedSearchesDestroyById>('https://api.twitter.com/1.1/saved_searches/destroy/:id.json' + params);
  }

  /**
   *  Returns an array of numeric user ids the authenticating user is blocking.Important This method is cursored, meaning your app must make multiple requests in order to receive all blocks correctly. See Using cursors to navigate collections for more details on how cursoring works.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-blocks-ids
   */
  public async blocksIds() {
    return await doGetRequest<BlocksIds>('https://api.twitter.com/1.1/blocks/ids.json');
  }

  /**
   *  Returns a collection of user objects that the authenticating user is blocking.Important This method is cursored, meaning your app must make multiple requests in order to receive all blocks correctly. See Using cursors to navigate collections for more details on how cursoring works.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-blocks-list
   */
  public async blocksList() {
    return await doGetRequest<BlocksList>('https://api.twitter.com/1.1/blocks/list.json');
  }

  /**
   *  Returns an array of numeric user ids the authenticating user has muted.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-ids
   */
  public async mutesUsersIds() {
    return await doGetRequest<MutesUsersIds>('https://api.twitter.com/1.1/mutes/users/ids.json');
  }

  /**
   *  Returns an array of user objects the authenticating user has muted.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-list
   */
  public async mutesUsersList() {
    return await doGetRequest<MutesUsersList>('https://api.twitter.com/1.1/mutes/users/list.json');
  }

  /**
   *  Blocks the specified user from following the authenticating user. In addition the blocked user will not show in the authenticating users mentions or timeline (unless retweeted by another user). If a follow or friend relationship exists it is destroyed.The URL pattern /version/block/create/:screen_name_or_user_id.format is still accepted but not recommended. As a sequence of numbers is a valid screen name we recommend using the screen_name or user_id parameter instead.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create
   * @param parameters
   */
  public async blocksCreate(parameters?: BlocksCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<BlocksCreate>('https://api.twitter.com/1.1/blocks/create.json' + params);
  }

  /**
   *  Mutes the user specified in the ID parameter for the authenticating user.Returns the muted user when successful. Returns a string describing the failure condition when unsuccessful.Actions taken in this method are asynchronous. Changes will be eventually consistent.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-create
   * @param parameters
   */
  public async mutesUsersCreate(parameters?: MutesUsersCreateParams) {
    const params = createParams(parameters);
    return await doPostRequest<MutesUsersCreate>('https://api.twitter.com/1.1/mutes/users/create.json' + params);
  }

  /**
   *  Un-mutes the user specified in the ID parameter for the authenticating user.Returns the unmuted user when successful. Returns a string describing the failure condition when unsuccessful.Actions taken in this method are asynchronous. Changes will be eventually consistent.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-destroy
   * @param parameters
   */
  public async mutesUsersDestroy(parameters?: MutesUsersDestroyParams) {
    const params = createParams(parameters);
    return await doPostRequest<MutesUsersDestroy>('https://api.twitter.com/1.1/mutes/users/destroy.json' + params);
  }

  /**
   *  Report the specified user as a spam account to Twitter. Additionally, optionally performs the equivalent of POST blocks / create on behalf of the authenticated user.
   *
   * @link https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-users-report_spam
   * @param parameters
   */
  public async usersReportSpam(parameters?: UsersReportSpamParams) {
    const params = createParams(parameters);
    return await doPostRequest<UsersReportSpam>('https://api.twitter.com/1.1/users/report_spam.json' + params);
  }

}

export default AccountsAndUsersClient;
