export interface TrendsPlaceParams {
  /**
  * The Yahoo! Where On Earth ID of the location to return trending information for. Global information is available by using 1 as the WOEID .
  */
  id: number;
  /**
  * Setting this equal to hashtags will remove all hashtags from the trends list.
  */
  exclude?: number;
}
