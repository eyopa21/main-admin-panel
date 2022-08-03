import { gql } from "@apollo/client/core";
export const GET_USER = gql `
  query user {
    user {
      id
      name
      email
      location
      logo
      password
      picture
      year
      admin
    }
  }
`;