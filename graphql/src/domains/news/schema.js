import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type SourceType {
    id: String
    name: String
    description: String
    url: String
    language: String
    country: String
  }

  extend type Query {
    sources: [SourceType]
  }
`;

export default typeDefs;
