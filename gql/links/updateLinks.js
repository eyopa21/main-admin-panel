import { gql } from "@apollo/client/core";

export const UPDATE_LINKS = gql `
mutation($id: Int!, $name: String!, $value: String!) {
    update_social_links(where: {id: {_eq: $id}}, _set: {name: $name, value: $value}) {
      returning {
        id
      }
    }
  }
`;