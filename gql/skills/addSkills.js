import { gql } from "@apollo/client/core";

export const ADD_SKILLS = gql `
mutation($level: Int, $icon: Int!, $skill_name: String!) {
    insert_skills_one(object: {level: $level, icon: $icon, skill_name: $skill_name}) {
      id
    }
  }
`;