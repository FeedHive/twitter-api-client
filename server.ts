import TwitterClient from "./generated/index";
const run = async () => {
  const twitterClient = new TwitterClient({
    apiKey: "<YOUR-TWITTER-API-KEY>",
    apiSecret: "<YOUR-TWITTER-API-SECRET>",
    accessToken: "<YOUR-TWITTER-ACCESS-TOKEN>",
    accessTokenSecret: "<YOUR-TWITTER-ACCESS-TOKEN-SECERT>",
  });
  const twitterClient2 = new TwitterClient({
    apiKey: "ddd",
    apiSecret: "ccc",
    accessToken: "<YOUR-TWITTER-ACCESS-TOKEN>",
    accessTokenSecret: "<YOUR-TWITTER-ACCESS-TOKEN-SECERT>",
  });
  const data = await twitterClient2.accountsAndUsers.usersSearch({
    q: "twitterDev",
  });
  console.log();
};
try {
  run();
} catch (e) {
  console.log(e);
}
