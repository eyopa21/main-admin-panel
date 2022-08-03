import { gql } from "@apollo/client/core";

export const DELETE_TIMELINE = gql `
mutation($id: Int!) {
    delete_timeline_by_pk(id: $id) {
      id
    }
  }
`;