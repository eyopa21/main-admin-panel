import { gql } from "@apollo/client/core";

export const DELETE_INVITES = gql `
  mutation ($id: Int!) {
    delete_invites_by_pk(id: $id) {
      id
    }
  }
`;