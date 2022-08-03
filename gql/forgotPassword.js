import { gql } from "@apollo/client/core";

export const FORGOT_PASSWORD = gql `
  mutation ($email: String!) {
    forgotpassword(email: $email) {
      id
    }
  }
`;