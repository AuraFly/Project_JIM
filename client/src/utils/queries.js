import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
