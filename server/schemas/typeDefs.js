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
    isAdmin: Boolean
    pic: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Reminder {
    _id: ID
    reminderText: String
    createdAt: String
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      instructorNumber:String!
      isAdmin: String!
      
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addReminder(reminderText: String): Reminder
    removeReminder(reminderId: ID): Reminder
  }

  type Query {
    users: [User]
    user(username: String!): User
    reminders(username: String): [Reminder]
    reminder(reminderId: ID): Reminder
    me: User
  }
`;

module.exports = typeDefs;
