const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
<<<<<<< HEAD
    instructorNumber: String
    isAdmin: Boolean
    pic: String
=======
    orders: [Order]
  }

  type Checkout {
    session: ID
>>>>>>> 394e64a (Worked on DB, Stripe, Store Page, Cover Page, SignIn Page)
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
<<<<<<< HEAD
      instructorNumber:String!
      isAdmin: String!
      
=======
>>>>>>> 394e64a (Worked on DB, Stripe, Store Page, Cover Page, SignIn Page)
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

// const typeDefs = gql`
//   type Category {
//     _id: ID
//     name: String
//   }

//   type Studio {
//     _id: ID
//     studioName: String
//     ownerName: String
//     phone: String
//   }

//   type Product {
//     _id: ID
//     name: String
//     description: String
//     image: String
//     quantity: Int
//     price: Float
//     category: Category
//   }

//   type Order {
//     _id: ID
//     purchaseDate: String
//     products: [Product]
//   }

//   type Checkout {
//     session: ID
//   }

//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     instructorNumber: String
//     orders: [Order]
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Reminder {
//     _id: ID
//     reminderText: String
//     createdAt: String
//   }

//   type Mutation {
//     addUser(
//       firstName: String!
//       lastName: String!
//       email: String!
//       password: String!
//       instructorNumber: String!
//     ): Auth
//     addOrder(products: [ID]!): Order
//     updateUser(
//       firstName: String
//       lastName: String
//       email: String
//       password: String
//     ): User
//     updateProduct(_id: ID!, quantity: Int!): Product
//     login(email: String!, password: String!): Auth
//     addReminder(reminderText: String): Reminder
//     removeReminder(reminderId: ID): Reminder
//   }

//   type Query {
//     users: [User]
//     user(username: String!): User
//     reminders(username: String): [Reminder]
//     reminder(reminderId: ID): Reminder
//     me: User
//     order(_id: ID!): Order
//     checkout(products: [ID]!): Checkout
//     categories: [Category]
//     products(category: ID, name: String): [Product]
//     product(_id: ID!): Product
//   }
// `;

module.exports = typeDefs;
