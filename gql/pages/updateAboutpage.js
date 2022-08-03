import { gql } from "@apollo/client/core";

export const UPDATE_ABOUTPAGE = gql `
  mutation ($header: String!, $description: String!) {
    update_aboutPage(
      where: { id: { _eq: 1 } }
      _set: { header: $header, description: $description }
    ) {
      returning {
        header
        description
        id
      }
    }
  }
`;