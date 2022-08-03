import { gql } from "@apollo/client/core";

export const ADD_TIMELINE = gql `
mutation($title: String!, $subtitle: String!, $description: String!) {
    insert_timeline_one(object: {title: $title, subtitle:  $subtitle, description: $description}) {
      id
    }
  }
  
`;