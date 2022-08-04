import { gql } from "@apollo/client/core";

export const GET_TIMELINE = gql `
  query timeline {
    timeline(order_by: {id: asc}) {
      id
      title
      subtitle
      description
      created_at
      updated_at
    }
  }
`;