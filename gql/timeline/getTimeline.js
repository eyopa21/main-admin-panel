import { gql } from "@apollo/client/core";

export const GET_TIMELINE = gql `
  query timeline {
    timeline {
      id
      title
      subtitle
      description
      created_at
      updated_at
    }
  }
`;