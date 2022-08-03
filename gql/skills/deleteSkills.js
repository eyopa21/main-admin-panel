import { gql } from "@apollo/client/core";

export const DELETE_SKILLS = gql `
mutation($id: Int!) {
    delete_skills_by_pk(id: $id) {
      id
    }
  }
  
`;