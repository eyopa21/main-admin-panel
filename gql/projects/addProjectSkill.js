import { gql } from "@apollo/client/core";

export const ADD_SKILL_PROJECT = gql `
mutation($project_id: Int!, $skill_id: Int!) {
    insert_project_skill(objects: {project_id: $project_id, skill_id: $skill_id}) {
      returning {
        id
      }
    }
  }
`;