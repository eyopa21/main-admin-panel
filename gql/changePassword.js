import { gql } from "@apollo/client/core";

export const CHANGE_PASSWORD = gql `
  mutation($password: String!, $id: Int!) {
    update_user(_set: {password: $password}, where: {id: {_eq: $id}}) {
      returning {
        id
      }
    }
  }
`;