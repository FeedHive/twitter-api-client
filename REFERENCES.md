# Reference

## Basics
### `TwitterClient.basics.oauthAuthenticate(parameters)`
#### Description
Allows a Consumer application to use an OAuth request_token to request user authorization. 
This method is a replacement of Section 6.2 of the OAuth 1.0 authentication flow for applications 
using the callback authentication flow. The method will use the currently logged in user as the account 
for access authorization unless the force_login parameter is set to true.This method differs from 
GET oauth / authorize in that if the user has already granted the application permission, 
the redirect will occur without the user having to re-approve the application. 
To realize this behavior, you must enable the Use Sign in with Twitter setting on your application record.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| force_login | false | boolean |
| screen_name | false | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/authenticate  
  
### `TwitterClient.basics.oauthAuthorize(parameters)`
#### Description
Allows a Consumer application to use an OAuth Request Token to request user authorization. 
This method fulfills Section 6.2 of the OAuth 1.0 authentication flow. 
Desktop applications must use this method (and cannot use GET oauth / authenticate).
Usage Note: An oauth_callback is never sent to this method, provide it to POST oauth / request_token instead.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| force_login | false | boolean |
| screen_name | false | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/authorize  
  
### `TwitterClient.basics.oauthAccessToken(parameters)`
#### Description
Allows a Consumer application to exchange the OAuth Request Token for an
OAuth Access Token. This method fulfills Section 6.3 of the OAuth 1.0 authentication flow.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| oauth_verifier | false | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/access_token  
  
### `TwitterClient.basics.oauthInvalidateToken(parameters)`
#### Description
Allows a registered application to revoke an issued OAuth access_token 
by presenting its client credentials. Once an access_token has been invalidated, 
new creation attempts will yield a different Access Token and usage of 
the invalidated token will no longer be allowed.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| access_token | true | string |
| access_token_secret | true | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/invalidate_access_token  
  
### `TwitterClient.basics.oauth2InvalidateToken(parameters)`
#### Description
Allows a registered application to revoke an issued oAuth 2.0 Bearer Token by presenting 
its client credentials. Once a Bearer Token has been invalidated, new creation 
attempts will yield a different Bearer Token and usage of the invalidated 
token will no longer be allowed.Successful responses include a 
JSON-structure describing the revoked Bearer Token.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| access_token | true | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/invalidate_bearer_token  
  
### `TwitterClient.basics.oauthRequestToken(parameters)`
#### Description
Allows a Consumer application to obtain an OAuth Request Token to request user authorization. 
This method fulfills Section 6.1 of the OAuth 1.0 authentication flow.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| oauth_callback | false | string |
| x_auth_access_type | false | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/request_token  
  
### `TwitterClient.basics.oauth2Token(parameters)`
#### Description
Allows a registered application to obtain an OAuth 2 Bearer Token, 
which can be used to make API requests on an application's own behalf, 
without a user context. This is called Application-only authentication.
A Bearer Token may be invalidated using oauth2/invalidate_token. 
Once a Bearer Token has been invalidated, new creation attempts will yield a different Bearer Token and 
usage of the previous token will no longer be allowed.
Only one bearer token may exist outstanding for an application, and repeated requests to this method 
will yield the same already-existent token until it has been invalidated.
Successful responses include a JSON-structure describing the awarded Bearer Token.
Tokens received by this method should be cached. 
If attempted too frequently, requests will be rejected with a HTTP 403 with code 99.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| grant_type | true | string |
  
#### Link
https://developer.twitter.com/en/docs/basics/authentication/api-reference/token  
  
## AccountsAndUsers
### `TwitterClient.accountsAndUsers.listsList(parameters)`
#### Description
Returns all lists the authenticating or specified user subscribes to, 
including their own. The user is specified using the user_id or screen_name parameters. 
If no user is given, the authenticating user is used.A maximum of 100 results will be 
returned by this call. Subscribed lists are returned first, followed by owned lists. 
This means that if a user subscribes to 90 lists and owns 20 lists, this method returns 
90 subscriptions and 10 owned lists. The reverse method returns owned lists first, 
so with reverse=true, 20 owned lists and 80 subscriptions would be returned. 
If your goal is to obtain every list a user owns or subscribes to, 
use GET lists / ownerships and/or GET lists / subscriptions instead.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| reverse | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-list  
  
### `TwitterClient.accountsAndUsers.listsMembers(parameters)`
#### Description
members/*
Returns the members of the specified list. Private list members will only be shown if the authenticated user owns the specified list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
| count | false | number |
| cursor | false | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-members  
  
### `TwitterClient.accountsAndUsers.listsMembersShow(parameters)`
#### Description
Check if the specified user is a member of the specified list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| user_id | true | number |
| screen_name | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-members-show  
  
### `TwitterClient.accountsAndUsers.listsMemberships(parameters)`
#### Description
Returns the lists the specified user has been added to. 
If user_id or screen_name are not provided, 
the memberships for the authenticating user are returned.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| count | false | number |
| cursor | false | number |
| filter_to_owned_lists | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-memberships  
  
### `TwitterClient.accountsAndUsers.listsOwnerships(parameters)`
#### Description
Returns the lists owned by the specified Twitter user. 
Private lists will only be shown if the authenticated user is also the owner of the lists.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| count | false | number |
| cursor | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-ownerships  
  
### `TwitterClient.accountsAndUsers.listsShow(parameters)`
#### Description
Returns the specified list. Private lists will only be shown if the authenticated user owns the specified list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-show  
  
### `TwitterClient.accountsAndUsers.listsStatuses(parameters)`
#### Description
Returns a timeline of tweets authored by members of the specified list. 
Retweets are included by default. Use the include_rts=false parameter to omit retweets.
Embedded Timelines is a great way to embed list timelines on your website.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
| since_id | false | number |
| max_id | false | number |
| count | false | number |
| include_entities | false | boolean |
| include_rts | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-statuses  
  
### `TwitterClient.accountsAndUsers.listsSubscribers(parameters)`
#### Description
subscribers/*
Returns the subscribers of the specified list. 
Private list subscribers will only be shown if the authenticated user owns the specified list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
| count | false | number |
| cursor | false | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers  
  
### `TwitterClient.accountsAndUsers.listsSubscribersShow(parameters)`
#### Description
Check if the specified user is a subscriber of the specified list. 
Returns the user if they are a subscriber.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| owner_screen_name | false | string |
| owner_id | false | number |
| list_id | true | number |
| slug | true | string |
| user_id | true | number |
| screen_name | true | string |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscribers-show  
  
### `TwitterClient.accountsAndUsers.listsSubscriptions(parameters)`
#### Description
Obtain a collection of the lists the specified user is subscribed to, 
20 lists per page by default. Does not include the user's own lists.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| count | false | number |
| cursor | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/get-lists-subscriptions  
  
### `TwitterClient.accountsAndUsers.listsCreate(parameters)`
#### Description
Creates a new list for the authenticated user. Note that you can create up to 1000 lists per account.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| name | true | number |
| mode | false | number |
| description | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-create  
  
### `TwitterClient.accountsAndUsers.listsDestroy(parameters)`
#### Description
Deletes the specified list. The authenticated user must own the list to be able to destroy it.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| owner_screen_name | false | string |
| owner_id | false | number |
| list_id | true | number |
| slug | true | string |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-destroy  
  
### `TwitterClient.accountsAndUsers.listsMembersCreate(parameters)`
#### Description
Add a member to a list. 
The authenticated user must own the list to be able to add members to it. 
Note that lists cannot have more than 5,000 members.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| user_id | true | number |
| screen_name | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create  
  
### `TwitterClient.accountsAndUsers.listsMembersCreateAll(parameters)`
#### Description
Adds multiple members to a list, by specifying a comma-separated 
list of member ids or screen names. The authenticated user must own the 
list to be able to add members to it. Note that lists can't have more 
than 5,000 members, and you are limited to adding up to 100 members 
to a list at a time with this method.Please note that there can be 
issues with lists that rapidly remove and add memberships. Take care when 
using these methods such that you are not too rapidly switching between 
removals and adds on the same list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| user_id | false | number |
| screen_name | false | string |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-create_all  
  
### `TwitterClient.accountsAndUsers.listsMembersDestroy(parameters)`
#### Description
Removes the specified member from the list. The authenticated user must be the list's owner to remove members from the list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | false | number |
| slug | false | string |
| user_id | false | number |
| screen_name | false | string |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy  
  
### `TwitterClient.accountsAndUsers.listsMembersDestroyAll(parameters)`
#### Description
Removes multiple members from a list, by specifying a comma-separated list 
of member ids or screen names. The authenticated user must own the list to 
be able to remove members from it. Note that lists can't have more 
than 500 members, and you are limited to removing up to 100 members to a 
list at a time with this method.Please note that there can be issues with 
lists that rapidly remove and add memberships. Take care when using these methods 
such that you are not too rapidly switching between removals and adds on the same list.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| user_id | false | number |
| screen_name | false | string |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-members-destroy_all  
  
### `TwitterClient.accountsAndUsers.listsSubscribersCreate(parameters)`
#### Description
Subscribes the authenticated user to the specified list.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| owner_screen_name | false | string |
| owner_id | false | number |
| list_id | true | number |
| slug | true | string |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-create  
  
### `TwitterClient.accountsAndUsers.listsSubscribersDestroy(parameters)`
#### Description
Unsubscribes the authenticated user from the specified list.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-subscribers-destroy  
  
### `TwitterClient.accountsAndUsers.listsUpdate(parameters)`
#### Description
Updates the specified list. The authenticated user must own the list to be able to update it.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| list_id | true | number |
| slug | true | string |
| name | false | number |
| mode | false | number |
| description | false | number |
| owner_screen_name | false | string |
| owner_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/create-manage-lists/api-reference/post-lists-update  
  
### `TwitterClient.accountsAndUsers.followersIds(parameters)`
#### Description
Returns a cursored collection of user IDs for every user following the specified user.
At this time, results are ordered with the most recent following first — however, 
this ordering is subject to unannounced change and eventual consistency issues. Results are 
given in groups of 5,000 user IDs and multiple "pages" of results can be navigated through 
using the next_cursor value in subsequent requests. See Using cursors to navigate 
collections for more information.This method is especially powerful when used in 
conjunction with GET users / lookup, a method that allows 
you to convert user IDs into full user objects in bulk.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| cursor | false | number |
| stringify_ids | false | boolean |
| count | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids  
  
### `TwitterClient.accountsAndUsers.followersList(parameters)`
#### Description
Returns a cursored collection of user objects for users following the specified user.
At this time, results are ordered with the most recent following first — however, 
this ordering is subject to unannounced change and eventual consistency issues. 
Results are given in groups of 20 users and multiple "pages" of results can be 
navigated through using the next_cursor value in subsequent requests. 
See Using cursors to navigate collections for more information.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| cursor | false | number |
| count | false | number |
| skip_status | false | boolean |
| include_user_entities | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-list  
  
### `TwitterClient.accountsAndUsers.friendsIds(parameters)`
#### Description
Returns a cursored collection of user IDs for every user the specified 
user is following (otherwise known as their "friends").At this time, results 
are ordered with the most recent following first — however, this ordering 
is subject to unannounced change and eventual consistency issues. 
Results are given in groups of 5,000 user IDs and multiple "pages" 
of results can be navigated through using the next_cursor value in subsequent requests. 
See Using cursors to navigate collections for more information.This method is 
especially powerful when used in conjunction with GET users / lookup, a method 
that allows you to convert user IDs into full user objects in bulk.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| cursor | false | number |
| stringify_ids | false | boolean |
| count | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids  
  
### `TwitterClient.accountsAndUsers.friendsList(parameters)`
#### Description
Returns a cursored collection of user objects for every user the 
specified user is following (otherwise known as their "friends").At this time, 
results are ordered with the most recent following first — however, this 
ordering is subject to unannounced change and eventual consistency issues. 
Results are given in groups of 20 users and multiple "pages" of results can 
be navigated through using the next_cursor value in subsequent requests. 
See Using cursors to navigate collections for more information.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| cursor | false | number |
| count | false | number |
| skip_status | false | boolean |
| include_user_entities | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friends-list  
  
### `TwitterClient.accountsAndUsers.friendshipsIncoming(parameters)`
#### Description
Returns a collection of numeric IDs for every user who has a pending request to follow the authenticating user.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| cursor | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-incoming  
  
### `TwitterClient.accountsAndUsers.friendshipsLookup(parameters)`
#### Description
Returns the relationships of the authenticating user to the comma-separated 
list of up to 100 screen_names or user_ids provided. Values for connections can be: 
following, following_requested, followed_by, none, blocking, muting.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| cursor | false | number |
| stringify_ids | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup  
  
### `TwitterClient.accountsAndUsers.friendshipsNoRetweetsIds(parameters)`
#### Description
Returns a collection of user_ids that the currently authenticated user does 
not want to receive retweets from.Use POST friendships / update to set the 
"no retweets" status for a given user account on behalf of the current user.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| stringify_ids | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-no_retweets-ids  
  
### `TwitterClient.accountsAndUsers.friendshipsOutgoing(parameters)`
#### Description
Returns a collection of numeric IDs for every protected user for 
whom the authenticating user has a pending follow request.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| cursor | false | number |
| stringify_ids | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-outgoing  
  
### `TwitterClient.accountsAndUsers.friendshipsShow(parameters)`
#### Description
Returns detailed information about the relationship between two arbitrary users.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| source_id | false | number |
| source_screen_name | false | string |
| target_id | false | number |
| target_screen_name | false | string |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show  
  
### `TwitterClient.accountsAndUsers.usersLookup(parameters)`
#### Description
Returns fully-hydrated user objects for up to 100 users per request, as specified by comma-separated values passed to the user_id and/or screen_name parameters.This method is especially useful when used in conjunction with collections of user IDs returned from GET friends / ids and GET followers / ids.GET users / show is used to retrieve a single user object.There are a few things to note when using this method.
You must be following a protected user to be able to see their most recent status update. If you don't follow a protected user their status will be removed.
The order of user IDs or screen names may not match the order of users in the returned array.
If a requested user is unknown, suspended, or deleted, then that user will not be returned in the results list.
If none of your lookup criteria can be satisfied by returning a user object, a HTTP 404 will be thrown.
You are strongly encouraged to use a POST for larger requests.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | string |
| include_entities | false | boolean |
| tweet_mode | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup  
  
### `TwitterClient.accountsAndUsers.usersSearch(parameters)`
#### Description
Provides a simple, relevance-based search interface 
to public user accounts on Twitter. Try querying by topical interest, 
full name, company name, location, or other criteria. Exact match searches 
are not supported.Only the first 1,000 matching results are available.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| q | true | string |
| page | false | number |
| count | false | number |
| include_entities | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-search  
  
### `TwitterClient.accountsAndUsers.usersShow(parameters)`
#### Description
Returns a variety of information about the user specified by 
the required user_id or screen_name parameter. 
The author's most recent Tweet will be returned inline when possible.GET users / lookup 
is used to retrieve a bulk collection of user objects.You must be following a 
protected user to be able to see their most recent Tweet. If you don't follow a 
protected user, the user's Tweet will be removed. A Tweet will not always be 
returned in the current_status field.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| include_entities | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-show  
  
### `TwitterClient.accountsAndUsers.friendshipsCreate(parameters)`
#### Description
Allows the authenticating user to follow (friend) the user 
specified in the ID parameter.Returns the followed user when successful. 
Returns a string describing the failure condition when unsuccessful. 
If the user is already friends with the user a HTTP 403 may be returned, 
though for performance reasons this method may also return a HTTP 200 OK 
message even if the follow relationship already exists.Actions taken in 
this method are asynchronous. Changes will be eventually consistent.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
| follow | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create  
  
### `TwitterClient.accountsAndUsers.friendshipsDestroy(parameters)`
#### Description
Allows the authenticating user to unfollow the user specified 
in the ID parameter. Returns the unfollowed user when successful. 
Returns a string describing the failure condition when unsuccessful.
Actions taken in this method are asynchronous. 
Changes will be eventually consistent.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy  
  
### `TwitterClient.accountsAndUsers.friendshipsUpdate(parameters)`
#### Description
Enable or disable Retweets and device notifications from the specified user.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
| device | false | boolean |
| retweets | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/post-friendships-update  
  
### `TwitterClient.accountsAndUsers.accountSettings()`
#### Description
Returns settings (including current trend, geo and sleep time information) for the authenticating user.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-account-settings  
  
### `TwitterClient.accountsAndUsers.accountVerifyCredentials(parameters)`
#### Description
Returns an HTTP 200 OK response code and a representation of the requesting user if authentication was successful;
returns a 401 status code and an error message if not. Use this method to test if supplied user credentials are valid.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| include_entities | false | boolean |
| skip_status | false | boolean |
| include_email | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials  
  
### `TwitterClient.accountsAndUsers.savedSearchesList()`
#### Description
Returns the authenticated user's saved search queries.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-list  
  
### `TwitterClient.accountsAndUsers.savedSearchesShowById(parameters)`
#### Description
Retrieve the information for the saved search represented by the given id. The authenticating user must be the owner of saved search ID being requested.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-show-id  
  
### `TwitterClient.accountsAndUsers.usersProfileBanner(parameters)`
#### Description
Returns a map of the available size variations of the specified user's profile banner.
If the user has not uploaded a profile banner, a HTTP 404 will be served instead.
This method can be used instead of string manipulation on the profile_banner_url
returned in user objects as described in Profile Images and Banners.
The profile banner data available at each size variant's URL is in PNG format.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/get-users-profile_banner  
  
### `TwitterClient.accountsAndUsers.accountRemoveProfileBanner()`
#### Description
Removes the uploaded profile banner for the authenticating user. Returns HTTP 200 upon success.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-remove_profile_banner  
  
### `TwitterClient.accountsAndUsers.accountUpdateProfile(parameters)`
#### Description
Sets some values that users are able to set under the "Account" 
tab of their settings page. Only the parameters specified will be updated.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| name | false | string |
| url | false | string |
| location | false | string |
| description | false | string |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile  
  
### `TwitterClient.accountsAndUsers.accountUpdateProfileBackgroundImageRetired(parameters)`
#### Description
Updates the authenticating user's profile background image. 
This method can also be used to enable or disable the profile 
background image.Although each parameter is marked as optional, at least one of 
image or media_id must be provided when making this request.Learn more about the 
deprecation of this endpoint via our forum post.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| image | false | number |
| tile | false | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
| media_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_background_image  
  
### `TwitterClient.accountsAndUsers.accountUpdateProfileBanner(parameters)`
#### Description
Uploads a profile banner on behalf of the authenticating user. More information about sizing variations can be found in User Profile Images and Banners and GET users / profile_banner.Profile banner images are processed asynchronously. The profile_banner_url and its variant sizes will not necessary be available directly after upload.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| banner | true | number |
| width | false | number |
| height | false | number |
| offset_left | false | number |
| offset_top | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_banner  
  
### `TwitterClient.accountsAndUsers.accountUpdateProfileImage(parameters)`
#### Description
Updates the authenticating user's profile image. 
Note that this method expects raw multipart data, not a URL to an image.
This method asynchronously processes the uploaded file before updating the 
user's profile image URL. You can either update your local cache the next 
time you request the user's information, or, at least 5 seconds after 
uploading the image, ask for the updated URL using GET users / show.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| image | true | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_image  
  
### `TwitterClient.accountsAndUsers.savedSearchesCreate(parameters)`
#### Description
Create a new saved search for the authenticated user. A user may only have 25 saved searches.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| query | true | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-create  
  
### `TwitterClient.accountsAndUsers.savedSearchesDestroyById(parameters)`
#### Description
Destroys a saved search for the authenticating user. The authenticating user must be the owner of saved search id being destroyed.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/manage-account-settings/api-reference/post-saved_searches-destroy-id  
  
### `TwitterClient.accountsAndUsers.blocksIds()`
#### Description
Returns an array of numeric user ids the authenticating user is blocking.
Important This method is cursored, meaning your app must make 
multiple requests in order to receive all blocks correctly. See Using cursors to navigate 
collections for more details on how cursoring works.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-blocks-ids  
  
### `TwitterClient.accountsAndUsers.blocksList()`
#### Description
Returns a collection of user objects that the authenticating user is blocking.
Important This method is cursored, meaning your app must make multiple 
requests in order to receive all blocks correctly. See Using cursors to 
navigate collections for more details on how cursoring works.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-blocks-list  
  
### `TwitterClient.accountsAndUsers.mutesUsersIds()`
#### Description
Returns an array of numeric user ids the authenticating user has muted.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-ids  
  
### `TwitterClient.accountsAndUsers.mutesUsersList()`
#### Description
Returns an array of user objects the authenticating user has muted.


  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-list  
  
### `TwitterClient.accountsAndUsers.blocksCreate(parameters)`
#### Description
Blocks the specified user from following the authenticating user. 
In addition the blocked user will not show in the authenticating users mentions 
or timeline (unless retweeted by another user). If a follow or friend 
relationship exists it is destroyed.The URL pattern 
/version/block/create/:screen_name_or_user_id.format is still accepted but not 
recommended. As a sequence of numbers is a valid screen name we recommend using 
the screen_name or user_id parameter instead.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create  
  
### `TwitterClient.accountsAndUsers.blocksDestroy(parameters)`
#### Description
Un-blocks the user specified in the ID parameter for the authenticating user.
Returns the un-blocked user when successful. If relationships existed before
the block was instantiated, they will not be restored.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
| include_entities | false | boolean |
| skip_status | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy  
  
### `TwitterClient.accountsAndUsers.mutesUsersCreate(parameters)`
#### Description
Mutes the user specified in the ID parameter for the authenticating user.
Returns the muted user when successful. Returns a string describing the 
failure condition when unsuccessful.Actions taken in this method are asynchronous. 
Changes will be eventually consistent.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-create  
  
### `TwitterClient.accountsAndUsers.mutesUsersDestroy(parameters)`
#### Description
Un-mutes the user specified in the ID parameter for the authenticating user.
Returns the unmuted user when successful. Returns a string describing the 
failure condition when unsuccessful.Actions taken in this method are asynchronous. 
Changes will be eventually consistent.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-destroy  
  
### `TwitterClient.accountsAndUsers.usersReportSpam(parameters)`
#### Description
Report the specified user as a spam account to Twitter. 
Additionally, optionally performs the equivalent of POST blocks / create 
on behalf of the authenticated user.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| screen_name | false | string |
| user_id | false | number |
| perform_block | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/accounts-and-users/mute-block-report-users/api-reference/post-users-report_spam  
  
## Tweets
### `TwitterClient.tweets.collectionsEntries(parameters)`
#### Description
Retrieve the identified Collection, presented as a list of the Tweets curated within.
The response structure of this method differs significantly from timelines you 
may be used to working with elsewhere in the Twitter API.To navigate a Collection, 
use the position object of a response, which includes attributes for max_position, 
min_position, and was_truncated. was_truncated indicates whether additional 
Tweets exist in the collection outside of the range of the current request. 
To retrieve Tweets further back in time, use the value of min_position found 
in the current response as the max_position parameter in the next call to this endpoint.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| count | false | number |
| max_position | false | number |
| min_position | false | number |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-entries  
  
### `TwitterClient.tweets.collectionsList(parameters)`
#### Description
Find Collections created by a specific user or containing a 
specific curated Tweet.Results are organized in a cursored collection.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | true | number |
| screen_name | true | string |
| tweet_id | false | number |
| count | false | number |
| cursor | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-list  
  
### `TwitterClient.tweets.collectionsShow(parameters)`
#### Description
Retrieve information associated with a specific Collection.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/get-collections-show  
  
### `TwitterClient.tweets.collectionsCreate(parameters)`
#### Description
Create a Collection owned by the currently authenticated user.
The API endpoint may refuse to complete the request if the authenticated 
user has exceeded the total number of allowed collections for their account.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| name | true | string |
| description | false | string |
| url | false | string |
| timeline_order | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-create  
  
### `TwitterClient.tweets.collectionsDestroy(parameters)`
#### Description
Permanently delete a Collection owned by the currently authenticated user.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-destroy  
  
### `TwitterClient.tweets.collectionsEntriesAdd(parameters)`
#### Description
Add a specified Tweet to a Collection.A collection will store up 
to a few thousand Tweets. Adding a Tweet to a collection beyond its 
allowed capacity will remove the oldest Tweet in the collection based 
on the time it was added to the collection.Use POST collections / entries / curate 
to add Tweets to a Collection in bulk.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| tweet_id | true | number |
| relative_to | false | number |
| above | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-add  
  
### `TwitterClient.tweets.collectionsEntriesCurate()`
#### Description
Curate a Collection by adding or removing Tweets in bulk. 
Updates must be limited to 100 cumulative additions or removals per request.
Use POST collections / entries / add and POST collections / entries / remove 
to add or remove a single Tweet.


  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-curate  
  
### `TwitterClient.tweets.collectionsEntriesMove(parameters)`
#### Description
Move a specified Tweet to a new position in a curation_reverse_chron ordered collection.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| tweet_id | true | number |
| relative_to | true | number |
| above | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-move  
  
### `TwitterClient.tweets.collectionsEntriesRemove(parameters)`
#### Description
Remove the specified Tweet from a Collection.Use POST 
collections / entries / curate to remove Tweets from a Collection in bulk.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| tweet_id | true | number |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-entries-remove  
  
### `TwitterClient.tweets.collectionsUpdate(parameters)`
#### Description
Update information concerning a Collection owned by the currently authenticated user.
Partial updates are not currently supported: please provide name, description, 
and url whenever using this method. Omitted description or url parameters will 
be treated as if an empty string was passed, overwriting 
any previously stored value for the Collection.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| name | false | string |
| description | false | string |
| url | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/curate-a-collection/api-reference/post-collections-update  
  
### `TwitterClient.tweets.statusesHomeTimeline(parameters)`
#### Description
Returns a collection of the most recent Tweets and Retweets posted 
by the authenticating user and the users they follow. The home timeline is 
central to how most users interact with the Twitter service.Up to 800 
Tweets are obtainable on the home timeline. It is more volatile for 
users that follow many users or follow users who Tweet frequently.
See Working with Timelines for instructions on traversing timelines efficiently.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| count | false | number |
| since_id | false | number |
| max_id | false | number |
| trim_user | false | boolean |
| exclude_replies | false | boolean |
| include_entities | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline  
  
### `TwitterClient.tweets.statusesMentionsTimeline(parameters)`
#### Description
Important notice: On June 19, 2019, we began enforcing a 
limit of 100,000 requests per day to the /statuses/mentions_timeline endpoint. 
This is in addition to existing user-level rate limits (75 requests / 15-minutes). 
This limit is enforced on a per-application basis, meaning that a 
single developer app can make up to 100,000 calls during any 
single 24-hour period.Returns the 20 most recent mentions 
(Tweets containing a users's @screen_name) for the authenticating user.
The timeline returned is the equivalent of the one seen when you view 
your mentions on twitter.com.This method can only return up to 800 tweets.
See Working with Timelines for instructions on traversing timelines.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| count | false | number |
| since_id | false | number |
| max_id | false | number |
| trim_user | false | boolean |
| include_entities | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-mentions_timeline  
  
### `TwitterClient.tweets.statusesUserTimeline(parameters)`
#### Description
Important notice: On June 19, 2019, we began enforcing a limit of 
100,000 requests per day to the /statuses/user_timeline endpoint, 
in addition to existing user-level and app-level rate limits.
This limit is applied on a per-application basis, meaning that a single developer app 
can make up to 100,000 calls during any single 24-hour period.Returns a collection 
of the most recent Tweets posted by the user indicated by the screen_name or 
user_id parameters.User timelines belonging to protected users may only be 
requested when the authenticated user either "owns" the timeline or is an 
approved follower of the owner.The timeline returned is the equivalent of 
the one seen as a user's profile on Twitter.This method can only return up 
to 3,200 of a user's most recent Tweets. Native retweets of other statuses 
by the user is included in this total, regardless of whether include_rts 
is set to false when requesting this resource.See Working with Timelines 
for instructions on traversing timelines.See Embedded Timelines, 
Embedded Tweets, and GET statuses/oembed for tools to render 
Tweets according to Display Requirements.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| since_id | false | number |
| count | false | number |
| max_id | false | number |
| trim_user | false | boolean |
| exclude_replies | false | boolean |
| include_rts | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline  
  
### `TwitterClient.tweets.favoritesList(parameters)`
#### Description
Note: favorites are now known as likes.
Returns the 20 most recent Tweets liked by the authenticating or specified user.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| user_id | false | number |
| screen_name | false | string |
| count | false | number |
| since_id | false | number |
| max_id | false | number |
| include_entities | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-favorites-list  
  
### `TwitterClient.tweets.statusesLookup(parameters)`
#### Description
Returns fully-hydrated Tweet objects for up to 100 Tweets per request, as specified by comma-separated values passed to the id parameter.This method is especially useful to get the details (hydrate) a collection of Tweet IDs.GET statuses / show / :id is used to retrieve a single Tweet object.There are a few things to note when using this method.
You must be following a protected user to be able to see their most recent Tweets. If you don't follow a protected user their status will be removed.
The order of Tweet IDs may not match the order of Tweets in the returned array.
If a requested Tweet is unknown or deleted, then that Tweet will not be returned in the results list, unless the map parameter is set to true, in which case it will be returned with a value of null.
If none of your lookup criteria matches valid Tweet IDs an empty array will be returned for map=false.
You are strongly encouraged to use a POST for larger requests.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| include_entities | false | boolean |
| trim_user | false | boolean |
| map | false | boolean |
| include_ext_alt_text | false | boolean |
| include_card_uri | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-lookup  
  
### `TwitterClient.tweets.statusesRetweetersIds(parameters)`
#### Description
Returns a collection of up to 100 user IDs belonging to users
who have retweeted the Tweet specified by the id parameter.
This method offers similar data to GET statuses / retweets / :id.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| count | false | number |
| cursor | false | number |
| stringify_ids | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids  
  
### `TwitterClient.tweets.statusesRetweetsById(parameters)`
#### Description
Returns a collection of the 100 most recent retweets of the Tweet specified by the id parameter.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| count | false | number |
| trim_user | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id  
  
### `TwitterClient.tweets.statusesRetweetsOfMe(parameters)`
#### Description
Returns the most recent Tweets authored by the authenticating user 
that have been retweeted by others. This timeline is a subset of
the user's GET statuses / user_timeline.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| count | false | number |
| since_id | false | number |
| max_id | false | number |
| trim_user | false | boolean |
| include_entities | false | boolean |
| include_user_entities | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets_of_me  
  
### `TwitterClient.tweets.statusesShow(parameters)`
#### Description
Returns a single Tweet, specified by the id parameter.
The Tweet's author will also be embedded within the Tweet.
See GET statuses / lookup for getting Tweets in bulk (up to 100 per call).
See also Embedded Timelines, Embedded Tweets, and GET statuses/oembed for tools
to render Tweets according to Display Requirements.
About GeoIf there is no geotag for a status, then there will be an 
empty <geo></geo> or "geo" : {}. 
This can only be populated if the user has used the Geotagging API to send a statuses/update.
The JSON response mostly uses conventions laid out in GeoJSON. 
The coordinates that Twitter renders are reversed from the GeoJSON specification 
(GeoJSON specifies a longitude then a latitude, whereas Twitter represents it as 
a latitude then a longitude), eg: "geo": 
{ "type":"Point", "coordinates":[37.78029, -122.39697] }


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| trim_user | false | boolean |
| include_my_retweet | false | boolean |
| include_entities | false | boolean |
| include_ext_alt_text | false | boolean |
| include_card_uri | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-show-id  
  
### `TwitterClient.tweets.favoritesCreate(parameters)`
#### Description
Note: favorites are now known as likes.Favorites (likes) the Tweet 
specified in the ID parameter as the authenticating user. 
Returns the favorite Tweet when successful.The process invoked by 
this method is asynchronous. The immediately returned Tweet object may not indicate 
the resultant favorited status of the Tweet. A 200 OK response from this method 
will indicate whether the intended action was successful or not.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| include_entities | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-favorites-create  
  
### `TwitterClient.tweets.favoritesDestroy(parameters)`
#### Description
Note: favorites are now known as likes.Unfavorites (un-likes) the Tweet 
specified in the ID parameter as the authenticating user. 
Returns the un-liked Tweet when successful.The process invoked by this method is asynchronous. 
The immediately returned Tweet object may not indicate the resultant favorited status of the Tweet. 
A 200 OK response from this method will indicate whether the intended action was successful or not.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| include_entities | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-favorites-destroy  
  
### `TwitterClient.tweets.statusesDestroyById(parameters)`
#### Description
Destroys the status specified by the required ID parameter.
The authenticating user must be the author of the specified status.
Returns the destroyed status if successful.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| trim_user | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-destroy-id  
  
### `TwitterClient.tweets.statusesOembed(parameters)`
#### Description
Returns a single Tweet, specified by either a Tweet web URL or the Tweet ID, in an oEmbed-compatible format.
The returned HTML snippet will be automatically recognized as an Embedded Tweet when Twitter's widget JavaScript
is included on the page.
The oEmbed endpoint allows customization of the final appearance of an Embedded Tweet by setting the corresponding
properties in HTML markup to b einterpreted by Twitter's JavaScript bundled with the HTML response by default.
The format of the returned markup may change over time as Twitter adds new features or adjusts its Tweet representation.
The Tweet fallback markup is meant to be cached on your servers for upt o the suggested cache lifetime specified in the cache_age.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| url | true | string |
| maxwidth | false | number |
| hide_media | false | boolean |
| hide_thread | false | boolean |
| omit_script | false | boolean |
| align | false | string |
| related | false | string |
| lang | false | string |
| theme | false | string |
| link_color | false | string |
| widget_type | false | string |
| dnt | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-oembed  
  
### `TwitterClient.tweets.statusesRetweetById(parameters)`
#### Description
Retweets a tweet. Returns the original Tweet with Retweet details embedded.Usage Notes:
This method is subject to update limits. A HTTP 403 will be returned if this limit as been hit.
Twitter will ignore attempts to perform duplicate retweets.
The retweet_count will be current as of when the payload is generated and may not reflect the exact count. It is intended as an approximation.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| trim_user | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-retweet-id  
  
### `TwitterClient.tweets.statusesUnretweetById(parameters)`
#### Description
Untweets a retweeted status. Returns the original Tweet with Retweet details embedded.Usage Notes:
This method is subject to update limits. A HTTP 429 will be returned if this limit has been hit.
The untweeted retweet status ID must be authored by the user backing the authentication token.
An application must have write privileges to POST. A HTTP 401 will be returned for read-only applications.
When passing a source status ID instead of the retweet status ID a HTTP 200 response will be returned with the same Tweet object but no action.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| trim_user | false | boolean |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-unretweet-id  
  
### `TwitterClient.tweets.statusesUpdate(parameters)`
#### Description
Updates the authenticating user's current status, also known as Tweeting.
For each update attempt, the update text is compared with the authenticating 
user's recent Tweets. Any attempt that would result in duplication will be 
blocked, resulting in a 403 error. A user cannot submit the same status twice in a row.
While not rate limited by the API, a user is limited in the number of Tweets they 
can create at a time. If the number of updates posted by the user reaches the current 
allowed limit this method will return an HTTP 403 error.About Geo
Any geo-tagging parameters in the update will be ignored if geo_enabled for the user 
is false (this is the default setting for all users, unless the user has enabled geolocation in their settings)
The number of digits after the decimal separator passed to lat (up to 8) is tracked so that 
when the lat is returned in a status object it will have the same number of digits 
after the decimal separator.
Use a decimal point as the separator (and not a decimal comma) for the latitude and the longitude 
- usage of a decimal comma will cause the geo-tagged portion of the status update to be dropped.
For JSON, the response mostly uses conventions described in GeoJSON. However, 
the geo object coordinates that Twitter renders are reversed from the GeoJSON specification. 
GeoJSON specifies a longitude then a latitude, whereas Twitter represents it as a latitude then 
a longitude: "geo": { "type":"Point", "coordinates":[37.78217, -122.40062] }
The coordinates object is replacing the geo object (no deprecation date has been set for the geo 
object yet) -- the difference is that the coordinates object, in JSON, is now rendered correctly in GeoJSON.
If a place_id is passed into the status update, then that place will be attached 
to the status. If no place_id was explicitly provided, but latitude and longitude 
are, the API attempts to implicitly provide a place by calling geo/reverse_geocode.
Users have the ability to remove all geotags from all their Tweets en masse via the 
user settings page. Currently there is no method to remove geotags from individual Tweets.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| status | true | string |
| in_reply_to_status_id | false | number |
| auto_populate_reply_metadata | false | boolean |
| exclude_reply_user_ids | false | number |
| attachment_url | false | string |
| media_ids | false | number |
| possibly_sensitive | false | boolean |
| lat | false | number |
| long | false | number |
| place_id | false | string |
| display_coordinates | false | boolean |
| trim_user | false | boolean |
| enable_dmcommands | false | boolean |
| fail_dmcommands | false | boolean |
| card_uri | false | string |
| tweet_mode | false | string |
  
#### Link
https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update  
  
### `TwitterClient.tweets.search(parameters)`
#### Description
Returns a collection of relevant Tweets matching a specified query.
Please note that Twitter's search service and, by extension, the 
Search API is not meant to be an exhaustive source of Tweets. 
Not all Tweets will be indexed or made available via the search interface.
To learn how to use Twitter Search effectively, please see the Standard search 
operators page for a list of available filter operators. Also, see the Working with 
Timelines page to learn best practices for navigating results by since_id and max_id.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| q | true | string |
| geocode | false | string |
| lang | false | string |
| locale | false | string |
| result_type | false | string |
| count | false | number |
| until | false | string |
| since_id | false | number |
| max_id | false | number |
| include_entities | false | boolean |
  
#### Link
https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets  
  
## DirectMessages
### `TwitterClient.directMessages.customProfilesById(parameters)`
#### Description
Returns a custom profile that was created with POST custom_profiles/new.json.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/custom-profiles/api-reference/get-profile  
  
### `TwitterClient.directMessages.eventsShow(parameters)`
#### Description
Returns a single Direct Message event by the given id.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/get-event  
  
### `TwitterClient.directMessages.eventsList(parameters)`
#### Description
Returns all Direct Message events (both sent and received) within the last 30 days. Sorted in reverse-chronological order.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| count | false | number |
| cursor | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/list-events  
  
### `TwitterClient.directMessages.eventsNew(parameters)`
#### Description
Publishes a new message_create event resulting in a Direct Message sent to a
specified user from the authenticating user. Returns an event if successful.
Supports publishing Direct Messages with optional Quick Reply and media attachment.
Replaces behavior currently provided by POST direct_messages/new.Requires a
JSON POST body and Content-Type header to be set to application/json.
Setting Content-Length may also be required if it is not automatically.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| event | true | {
  type: string;
  message_create: {
    target: {
      recipient_id: string;
    };
    message_data: {
      text: string;
      quick_reply?: {
        type: string[],
      };
      attachment?: {
        type: string;
        media: {
          id: string;
        }
      };
    }
  }
}
 |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/new-event  
  
### `TwitterClient.directMessages.indicateTyping(parameters)`
#### Description
Displays a visual typing indicator in the recipient’s
Direct Message conversation view with the sender.
Each request triggers a typing indicator animation
with a duration of ~3 seconds.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| recipient_id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/typing-indicator-and-read-receipts/api-reference/new-typing-indicator  
  
### `TwitterClient.directMessages.welcomeMessagesRulesShow(parameters)`
#### Description
Returns a Welcome Message Rule by the given id.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message-rule  
  
### `TwitterClient.directMessages.welcomeMessagesShow(parameters)`
#### Description
Returns a Welcome Message by the given id.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/get-welcome-message  
  
### `TwitterClient.directMessages.welcomeMessagesNew(parameters)`
#### Description
Creates a new Welcome Message that will be stored and sent in the future
from the authenticating user in defined circumstances.
Returns the message template if successful. Supports publishing with the same
elements as Direct Messages (e.g. Quick Replies, media attachments).
Requires a JSON POST body and Content-Type header to be set to application/json.
Setting Content-Length may also be required if it is not automatically.
See the Welcome Messages overview to learn how to work with Welcome Messages.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| welcome_message | true | {
  message_data: {
    text: string;
    quick_reply?: {
      type: string[],
    };
    attachment?: {
      type: string;
      media: {
        id: string;
      }
    };
  };
  name?: string;
}
 |
| name | false | string |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message  
  
### `TwitterClient.directMessages.welcomeMessagesRulesNew(parameters)`
#### Description
Creates a new Welcome Message Rule that determines which Welcome Message will be
shown in a given conversation. Returns the created rule if successful.
Requires a JSON POST body and Content-Type header to be set to application/json.
Setting Content-Length may also be required if it is not automatically.
Additional rule configurations are forthcoming. For the initial beta release,
the most recently created Rule will always take precedence, and the assigned
Welcome Message will be displayed in the conversation.See the Welcome Messages
overview to learn how to work with Welcome Messages.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| welcome_message_rule | true | {
  welcome_message_id: string;
}
 |
  
#### Link
https://developer.twitter.com/en/docs/direct-messages/welcome-messages/api-reference/new-welcome-message-rule  
  
### `TwitterClient.directMessages.welcomeMessagesList(parameters)`
#### Description
Returns a list of Welcome Messages.

#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| count | false | number |
| cursor | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/welcome-messages/api-reference/list-welcome-messages  
  
## Media
### `TwitterClient.media.mediaUploadInit(parameters)`
#### Description
The INIT command request is used to initiate a file upload session.
It returns a media_id which should be used to execute all subsequent requests.
The next step after a successful return from INIT command is the APPEND command.
See the Uploading media guide for constraints and requirements on media files.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| command | true | string |
| total_bytes | true | number |
| media_type | true | string |
| media_category | false | string |
| additional_owners | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload-init  
  
### `TwitterClient.media.mediaUploadAppend(parameters)`
#### Description
The APPEND command is used to upload a chunk (consecutive byte range) of the media file.
For example, a 3 MB file could be split into 3 chunks of size 1 MB,
and uploaded using 3 APPEND command requests.
After the entire file is uploaded, the next step is to call the FINALIZE command.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| command | true | string |
| media_id | true | string |
| media | false | string |
| media_data | false | string |
| segment_index | true | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload-append  
  
### `TwitterClient.media.mediaUploadStatus(parameters)`
#### Description
The STATUS command is used to periodically poll for updates of media processing operation.
After the STATUS command response returns succeeded,
you can move on to the next step which is usually create Tweet with media_id.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| command | true | string |
| media_id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/get-media-upload-status  
  
### `TwitterClient.media.mediaUploadFinalize(parameters)`
#### Description
The FINALIZE command should be called after the entire media file is uploaded
using APPEND commands. If and (only if) the response of the FINALIZE command
contains a processing_info field, it may also be necessary to use a STATUS
command and wait for it to return success before proceeding to Tweet creation.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| command | true | string |
| media_id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload-finalize  
  
### `TwitterClient.media.mediaUpload(parameters)`
#### Description
Use this endpoint to upload images to Twitter.
This endpoint returns a media_id by default and can optionally return a media_key
when a media_category is specified. These values are used by Twitter endpoints that accept images.
For example, a media_id value can be used to create a Tweet with an
attached photo using the POST statuses/update endpoint.
All Ads API endpoints require a media_key.
For example, a media_key value can be used to create a Draft Tweet
with a photo using the POST accounts/:account_id/draft_tweets endpoint.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| media | false | string |
| media_data | false | string |
| media_category | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload  
  
### `TwitterClient.media.mediaMetadataCreate(parameters)`
#### Description
This endpoint can be used to provide additional information about the uploaded media_id.
This feature is currently only supported for images and GIFs.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| media_id | true | string |
| alt_text | true | { text: string } |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-metadata-create  
  
### `TwitterClient.media.mediaSubtitlesDelete()`
#### Description
Use this endpoint to dissociate subtitles from a video and delete the subtitles.
You can dissociate subtitles from a video before or after Tweeting.


  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-subtitles-delete  
  
### `TwitterClient.media.mediaSubtitlesCreate()`
#### Description
Use this endpoint to associate uploaded subtitles to an uploaded video.
You can associate subtitles to video before or after Tweeting.
Request flow for associating subtitle to video before the video is Tweeted : 1.
Upload video using the chunked upload endpoint and get the video media_id. 2.
Upload subtitle using the chunked upload endpoint with media category set to “Subtitles”
and get the subtitle media_id. 
3. Call this endpoint to associate the subtitle to the video.
4. Create Tweet with the video media_id.


  
#### Link
https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-subtitles-create  
  
## Trends
### `TwitterClient.trends.trendsAvailable()`
#### Description
Returns the locations that Twitter has trending topic information for.The response is an array of "locations" that encode the location's WOEID and some other human-readable information such as a canonical name and country the location belongs in.A WOEID is a Yahoo! Where On Earth ID.


  
#### Link
https://developer.twitter.com/en/docs/trends/locations-with-trending-topics/api-reference/get-trends-available  
  
### `TwitterClient.trends.trendsClosest(parameters)`
#### Description
Returns the locations that Twitter has trending topic information for, 
closest to a specified location.The response is an array of "locations" 
that encode the location's WOEID and some other human-readable information 
such as a canonical name and country the location belongs in.A WOEID is a Yahoo! 
Where On Earth ID.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| lat | true | number |
| long | true | number |
  
#### Link
https://developer.twitter.com/en/docs/trends/locations-with-trending-topics/api-reference/get-trends-closest  
  
### `TwitterClient.trends.trendsPlace(parameters)`
#### Description
Returns the top 50 trending topics for a specific WOEID, if trending 
information is available for it.The response is an array of trend 
objects that encode the name of the trending topic, the query 
parameter that can be used to search for the topic on Twitter Search,
and the Twitter Search URL.This information is cached for 5 minutes. 
Requesting more frequently than that will not return any more data, and 
will count against rate limit usage.The tweet_volume for the last 24 hours 
is also returned for many trends if this is available.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | number |
| exclude | false | number |
  
#### Link
https://developer.twitter.com/en/docs/trends/trends-for-location/api-reference/get-trends-place  
  
## Geo
### `TwitterClient.geo.geoIdByPlaceId(parameters)`
#### Description
Returns all the information about a known place.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| place_id | true | string |
  
#### Link
https://developer.twitter.com/en/docs/geo/place-information/api-reference/get-geo-id-place_id  
  
### `TwitterClient.geo.geoReverseGeocode()`
#### Description
Given a latitude and a longitude, searches for up to 20 places that can be used as a place_id when updating a status.This request is an informative call and will deliver generalized results about geography.


  
#### Link
https://developer.twitter.com/en/docs/geo/places-near-location/api-reference/get-geo-reverse_geocode  
  
### `TwitterClient.geo.geoSearch()`
#### Description
Search for places that can be attached to a Tweet via POST statuses/update. Given a latitude and a longitude pair, an IP address, or a name, this request will return a list of all the valid places that can be used as the place_id when updating a status.Conceptually, a query can be made from the user's location, retrieve a list of places, have the user validate the location they are at, and then send the ID of this location with a call to POST statuses/update.This is the recommended method to use find places that can be attached to statuses/update. Unlike GET geo/reverse_geocode which provides raw data access, this endpoint can potentially re-order places with regards to the user who is authenticated. This approach is also preferred for interactive place matching with the user.Some parameters in this method are only required based on the existence of other parameters. For instance, "lat" is required if "long" is provided, and vice-versa. Authentication is recommended, but not required with this method.


  
#### Link
https://developer.twitter.com/en/docs/geo/places-near-location/api-reference/get-geo-search  
  
## Metrics
### `TwitterClient.metrics.tweets(parameters)`
#### Description
The metrics field allows developers to access public and private engagement metrics for
Tweet and media objects. Public metrics are accessible by anyone with a developer account while
private metrics are accessible from owned/authorized accounts (definition below).


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| ids | true | string |
| tweet.fields | false | string |
| media.fields | false | string |
| expansions | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/metrics  
  
## TweetsV2
### `TwitterClient.tweetsV2.createTweet(parameters)`
#### Description
Creates a Tweet on behalf of an authenticated user.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| text | true | string |
| direct_message_deep_link | false | string |
| for_super_followers_only | false | boolean |
| geo | false | {
  place_id: string
}
 |
| media | false | {
  media_ids: string[];
  tagged_user_ids?: string[];
}
 |
| poll | false | {
  options: string[];
  duration_minutes: number;
}
 |
| quote_tweet_id | false | string |
| reply | false | {
  exclude_reply_user_ids?: string;
  in_reply_to_tweet_id: string;
}
 |
| reply_settings | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets  
  
### `TwitterClient.tweetsV2.searchRecentTweets(parameters)`
#### Description
Returns Tweets from the last seven days that match a search query


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| query | true | string |
| end_time | false | string |
| expansions | false | string |
| max_results | false | number |
| media.fields | false | string |
| next_token | false | string |
| place.fields | false | string |
| poll.fields | false | string |
| since_id | false | string |
| sort_order | false | string |
| start_time | false | string |
| tweet.fields | false | string |
| until_id | false | string |
| user.fields | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent  
  
### `TwitterClient.tweetsV2.searchAllTweets(parameters)`
#### Description
Full-archive search returns the complete history of public Tweets matching a search query; since the first Tweet was created March 26, 2006.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| query | true | string |
| end_time | false | string |
| expansions | false | string |
| max_results | false | number |
| media.fields | false | string |
| next_token | false | string |
| place.fields | false | string |
| poll.fields | false | string |
| since_id | false | string |
| sort_order | false | string |
| start_time | false | string |
| tweet.fields | false | string |
| until_id | false | string |
| user.fields | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all  
  
### `TwitterClient.tweetsV2.likingUsers(parameters)`
#### Description
Allows you to get information about a Tweet’s liking users.


#### Parameters

| Name | Required | type |
| ---- | -------- | ---- |
| id | true | string |
| expansions | false | string |
| max_results | false | number |
| media.fields | false | string |
| pagination_token | false | string |
| place.fields | false | string |
| poll.fields | false | string |
| tweet.fields | false | string |
| user.fields | false | string |
  
#### Link
https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users  
  
