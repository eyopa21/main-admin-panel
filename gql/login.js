import { gql } from "@apollo/client/core";

export const LOGIN = gql `
mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    email
    id
    location
  }
}

`;