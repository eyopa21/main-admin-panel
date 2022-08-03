import { gql } from "@apollo/client/core";

export const DELETE_ICONS = gql `
mutation($id: Int!) {
    delete_icons_by_pk(id: $id) {
      id
    }
  }
  
`;