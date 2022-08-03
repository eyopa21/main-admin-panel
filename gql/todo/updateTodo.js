import { gql } from "@apollo/client/core";

export const UPDATE_TODO = gql `
mutation($id: Int!, $is_finished:  Boolean!) {
    update_todo_by_pk(pk_columns: {id: $id}, _set: {is_finished: $is_finished}) {
      id
    }
  }
  
`;