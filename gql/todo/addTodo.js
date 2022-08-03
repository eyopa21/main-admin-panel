import { gql } from "@apollo/client/core";

export const ADD_TODO = gql `
mutation($todo: String!) {
    insert_todo_one(object: {todo: $todo}) {
      id
    }
  }
  
`;