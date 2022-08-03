import { gql } from "@apollo/client/core";

export const UPDATE_CONTACTPAGE = gql `
  mutation ($header: String!, $description: String!) {
    update_contactPage(
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