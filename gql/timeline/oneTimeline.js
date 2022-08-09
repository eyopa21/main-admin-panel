import { gql } from "@apollo/client/core";

export const GET_ONE_TIMELINE = gql `
  query timeline($id: Int!) {
    timeline_by_pk(id: $id) {
      id
      title
      subtitle
      description
      created_at
      updated_at
    }
  }
`;