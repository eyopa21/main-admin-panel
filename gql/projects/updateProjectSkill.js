import { gql } from "@apollo/client/core";

export const UPDATE_SKILL_PROJECT = gql `
mutation( $project_id: Int, $skill_id: Int! ) {
    update_project_skill(where: {project_id: {_eq:$project_id}}, _inc: {project_id:$project_id, skill_id: $skill_id}) {
      returning {
        id
      }
    }
  }
  
`;