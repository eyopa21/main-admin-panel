import { gql } from "@apollo/client/core";

export const UPDATE_TIMELINE = gql `
mutation($id: Int!, $title: String!, $subtitle: String!, $description: String!) {
    update_timeline_by_pk(pk_columns: {id: $id}, _set: {title: $title, subtitle: $subtitle, description: $description}) {
      subtitle
      title
      id
      description
    }
  }
  
`;