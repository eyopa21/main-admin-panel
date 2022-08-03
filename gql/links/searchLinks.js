import { gql } from "@apollo/client/core";

export const SEARCH_LINKS = gql `
  query social_links($search: String!) {
    social_links(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { value: { _ilike: $search } }
         
          
        ]
      }
    ) {
        id
      name
      value
      iconSvg {
        svg
        name
        id
      }
    }
    }
  
`;