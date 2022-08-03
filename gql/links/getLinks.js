import { gql } from "@apollo/client/core";

export const GET_LINKS = gql `
  query social_links {
    social_links {
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