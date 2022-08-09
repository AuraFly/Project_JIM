import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $instructorNumber: String!
    $phone: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      instructorNumber: $instructorNumber
      phone: $phone
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REMINDER = gql`
  mutation ADD_Reminder($reminderText: String!) {
    addReminder(remindertext: $reminderText) {
      _id
      reminderText
      createdAt
    }
  }
`;
