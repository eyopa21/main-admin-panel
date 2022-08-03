import { gql } from "@apollo/client/core";

export const UPDATE_HOMEPAGE = gql `
  mutation ($header: String!, $description: String!) {
    update_homePage(
      where: { id: { _eq: 1 } }
      _set: { header: $header, description: $description }
    ) {
      returning {
        header
        id
      }
    }
  }
`;