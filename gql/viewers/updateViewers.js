import { gql } from "@apollo/client/core";

export const FORGOT_PASSWORD = gql `
  mutation($id: Int!, $count: Int!) {
    update_viewers(where: {id: {_eq: $id}}, _set: {count: $count}) {
      returning {
        id
      }
    }
  }
`;