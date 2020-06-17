import sourcesQuery from '@/graphql/news/sources.gql';

async function getSources(apolloClient) {
  const { data } = await apolloClient.query({
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
    query: sourcesQuery,
  });
  return data && data.sources;
}

export {
  getSources,
};
