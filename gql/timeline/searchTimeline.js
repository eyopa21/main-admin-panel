import { gql } from "@apollo/client/core";

export const SEARCH_TIMELINES = gql `
  query timeline($search: String!) {
    timeline(
      where: {
        _or: [
          { title: { _ilike: $search } }
          { subtitle: { _ilike: $search } }
          { description: { _ilike: $search } }
         
          
        ]
      }
    ) {
        id
      title
      subtitle
      description
      created_at
      updated_at
    }
  }
`;