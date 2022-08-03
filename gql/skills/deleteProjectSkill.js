import { gql } from "@apollo/client/core";

export const DELETE_SKILL_PROJECT = gql `
mutation($skill_id: Int!) {
    delete_project_skill(where: {skill_id: {_eq: $skill_id}}) {
      returning {
        id
      }
    }
  }
  
  
`;