import { gql } from "@apollo/client/core";

export const DELETE_PROJECT_SKILL = gql `
mutation($project_id: Int!) {
    delete_project_skill(where: {project_id: {_eq: $project_id}}) {
      returning {
        id
      }
    }
  }
  
  
`;