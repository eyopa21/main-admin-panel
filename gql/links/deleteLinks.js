import { gql } from "@apollo/client/core";

export const DELETE_LINKS = gql `
mutation($id: Int!) {
    delete_social_links_by_pk(id: $id) {
      id
    }
  }
  
  
  
`;