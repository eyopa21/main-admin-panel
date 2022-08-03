import { gql } from "@apollo/client/core";

export const UPDATE_SKILLS = gql `
mutation($id: Int!, $level: Int!, $skill_name: String!) {
    update_skills(where: {id: {_eq: $id}}, _set: {level: $level, skill_name: $skill_name}) {
      returning {
        id
        level
        of_whom
      }
    }
  }
`;