import { gql } from "@apollo/client/core";

export const GET_SKILLS = gql `
  query skills {
    skills(order_by: {id: asc}) {
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