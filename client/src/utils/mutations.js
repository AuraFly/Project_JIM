import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
 mutation AddUser($password: String!, $email: String!, $lastName: String!, $firstName: String!, $instructorNumber: String!) {
  addUser(password: $password, email: $email, lastName: $lastName, firstName: $firstName, instructorNumber: $instructorNumber) {
    token
    user {
      _id
      firstName
      lastName
      email
      instructorNumber
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

