import { gql } from "@apollo/client/core";

export const ADD_LINKS = gql `
mutation($name: String!, $icon: Int!, $value: String!) {
    insert_social_links_one(object: {name: $name, icon: $icon, value: $value}) {
      id
    }
  }
`;