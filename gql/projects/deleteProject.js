import { gql } from "@apollo/client/core";

export const DELETE_PROJECTS = gql `
mutation($id: Int!) {
    delete_projects_by_pk(id: $id) {
      id
    }
  }
  
`;