import { gql } from "@apollo/client/core";

export const GET_LINKS = gql `
  query social_links {
    social_links(order_by: {id: asc}) {
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