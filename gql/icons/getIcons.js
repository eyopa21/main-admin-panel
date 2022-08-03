import { gql } from "@apollo/client/core";

export const GET_ICONS = gql `
  query icons {
    icons {
      id
      name
      svg
    }
  }
`;