const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Studio {
    _id: ID
    studioName: String
    ownerName: String
    phone: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    instructorNumber: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }

  type Query {
    udata: [User]
  }
`;

module.exports = typeDefs;
