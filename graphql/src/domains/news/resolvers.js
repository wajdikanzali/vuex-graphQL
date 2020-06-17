const resolverMap = {
  Query: {
    async sources(obj, args, { dataSources }) {
      const { sources } = await dataSources
        .newsApi
        .getSources();
      return sources;
    },
  },
};
export default resolverMap;
