import { gql } from "@apollo/client/core";

export const GET_INVITES = gql `
  query invities {
    invites (order_by: {id: asc}) {
      email
      id
    }
  }
`;