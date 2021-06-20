import algoliasearch, { SearchIndex } from 'algoliasearch';

export default function (index: string): SearchIndex {
  const appId = process.env.VUE_APP_ALGOLIA_APP_ID;
  const appKey = process.env.VUE_APP_ALGOLIA_APP_KEY;

  const client = algoliasearch(appId, appKey);
  return client.initIndex(index);
}
