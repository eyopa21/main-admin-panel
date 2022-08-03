import { gql } from "@apollo/client/core";

export const LOGIN_VIA_CODE = gql `
  mutation($email: String!, $code: String!) {
    loginViaInvite(email: $email, code: $code) {
      id
      email
    }
  }
`;