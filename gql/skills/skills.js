import { gql } from "@apollo/client/core";

export const GET_SKILLS = gql `
  query skills {
    skills {
      id
      skill_name
      level
      created_at
      updated_at
      iconSvg {
      svg
      id
    }
    }
  }
`;