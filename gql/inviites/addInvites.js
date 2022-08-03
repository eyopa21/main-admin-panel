import { gql } from "@apollo/client/core";

export const INVITE_USER = gql `
mutation($email: String!) {
    InviteUser(arg1: {email: $email}) {
      message
    }
  }

`;