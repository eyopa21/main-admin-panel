import { gql } from "@apollo/client/core";

export const UPDATE_PROJECTS = gql `
mutation($id: Int!, $title: String!, $subtitle: String!, $description: String!, $link: String!, $pricture: String!) {
    update_projects(where: {id: {_eq:$id}}, _set: {title: $title, subtitle: $subtitle, description: $description, link: $link, pricture: $pricture}) {
      returning {
        id
        link
        pricture
        description
      }
    }
  }
`;