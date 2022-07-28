//JIMDBData is just a placeholder collection! Feel free to alter and remove!
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type JIMDBData {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    testdata: [JIMDBData]
  }
`;

module.exports = typeDefs;
