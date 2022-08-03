import { gql } from "@apollo/client/core";

export const UPDATE_SKILLSPAGE = gql `
  mutation ($header: String!, $description: String!) {
    update_skillsPage(
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