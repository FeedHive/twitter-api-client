# Twitter API Client

Node.js client for Twitter API

![](https://i.imgur.com/NfnLHIM.png)

[![NPM Version](https://img.shields.io/npm/v/twitter-api-client)](https://www.npmjs.com/package/twitter-api-client)
![Build Status](https://github.com/FeedHive/twitter-api-client/workflows/build/badge.svg)

## Table of content

- [Features](#features)
- [**Getting Started**](#getting-started)
- [Usage](#usage)
- [License](#license)
- [Get Help](#get-help)
- [Contribute](#contribute)

## Features

☑️ Includes 90% of the **official Twitter API** endpoints.  
☑️ **Promise-based!** No ugly callbacks.  
☑️ **Fully typed!** Both for query parameters and responses.  
☑️ Inbuilt in-memory **cache** for rate-limit friendly usage.

## Getting Started

### Get your Twitter credentials

You will need to create a set of Twitter developer credentials from your Twitter Developer account.  
If you don't have one already, apply for a developer account [here](https://developer.twitter.com/).  
It takes about 5 minutes.

### Install

```console
npm i twitter-api-client
```

## Usage

```javascript
import { TwitterClient } from 'twitter-api-client';

const twitterClient = new TwitterClient({
  apiKey: '<YOUR-TWITTER-API-KEY>',
  apiSecret: '<YOUR-TWITTER-API-SECRET>',
  accessToken: '<YOUR-TWITTER-ACCESS-TOKEN>',
  accessTokenSecret: '<YOUR-TWITTER-ACCESS-TOKEN-SECRET>',
});

// Search for a user
const data = await twitterClient.accountsAndUsers.usersSearch({ q: 'twitterDev' });

// Get message event by Id
const data = await twitterClient.directMessages.directMessagesEventsShow({ id: '1234' });

// Get most recent 25 retweets of a tweet
const data = await twitterClient.tweets.statusesRetweetsById({ id: '12345', count: 25 });

// Get local trends
const data = await twitterClient.trends.trendsAvailable();
```

[See all available methods here](https://github.com/FeedHive/twitter-api-client/blob/master/REFERENCES.md).

### Configuration

`twitter-api-client` comes with an inbuilt in-memory cache.  
The stale data is served by the cache-first principle.

You can configure the caching behavior upon instantiation of the client:

```javascript
const twitterClient = new TwitterClient({
  apiKey: '<YOUR-TWITTER-API-KEY>',
  apiSecret: '<YOUR-TWITTER-API-SECRET>',
  accessToken: '<YOUR-TWITTER-ACCESS-TOKEN>',
  accessTokenSecret: '<YOUR-TWITTER-ACCESS-TOKEN-SECRET>',
  ttl: 120, // seconds. Defaults to 360
  disableCache: true, // Disables the caching behavior. Defaults to 'false'
  maxByteSize: 32000000, // Maximum (approximated) memory size for cache store. Defaults to 16000000.
});
```

## License

This project is licensed under the [MIT License](https://github.com/Silind/twitter-api-client/blob/master/LICENSE)

## Get Help

- Reach out on [Twitter](https://twitter.com/SimonHoiberg)
- Open an [issue on GitHub](https://github.com/Silind/twitter-api-client/issues/new)

## Contribute

#### Issues

In the case of a bug report, bugfix or a suggestions, please feel very free to open an issue.

#### Pull request

Pull requests are always welcome, and I'll do my best to do reviews as fast as I can.
Please refer to the [contribution guide](https://github.com/Silind/twitter-api-client/blob/master/CONTRIBUTING.md) to see how to get started.
