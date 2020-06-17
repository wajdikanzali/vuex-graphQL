const LOCAL_URL = 'http://localhost:5000';

module.exports = {
  service: {
    endpoint: {
      url: `${process.env.CORVUS_URL || LOCAL_URL}/gql`,
    },
  },
};
