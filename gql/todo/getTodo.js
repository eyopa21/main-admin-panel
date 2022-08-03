import { gql } from "@apollo/client/core";

export const GET_TODO = gql `
  query todo {
    todo(order_by: { id: asc }) {
      id
      todo
      is_finished
    }
  }
`;