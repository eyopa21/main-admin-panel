import { gql } from "@apollo/client/core";

export const ADD_PROJECTS = gql `
mutation($description: String!, $subtitle: String!, $title: String!,  $pricture: String!,  $link: String!) {
    insert_projects_one(object: {description: $description, link: $link, pricture: $pricture, subtitle: $subtitle, title: $title}) {
      id
    }
  }
`;