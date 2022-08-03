import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      likes
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      likes
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
          likes
        }
      }
    }
  }
`;

export const QUERY_REMINDERS = gql`
  query getReminders {
    reminders {
      _id
      reminderText
      createdAt
    }
  }
`;

export const QUERY_SINGLE_REMINDER = gql`
  query getSinglereminder($reminderId: ID!) {
    reminder(reminderId: $reminderId) {
      _id
      reminderText
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      reminders {
        _id
        reminderText
        createdAt
      }
    }
  }
`;
