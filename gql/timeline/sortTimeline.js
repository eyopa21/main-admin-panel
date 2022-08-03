import { gql } from "@apollo/client/core";

export const SORT_TIMELINE = gql `
  query timeline($type: [timeline_order_by!]) {
    timeline(order_by: $type) {
      id
      title
      subtitle
      description
      created_at
      updated_at
    }
  }
`;