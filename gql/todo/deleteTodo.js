import { gql } from "@apollo/client/core";

export const DELETE_TODO = gql `
mutation($id: Int!) {
    delete_todo_by_pk(id: $id) {
      id
    }
  }
  
`;