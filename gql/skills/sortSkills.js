import { gql } from "@apollo/client/core";

export const SORT_SKILLS = gql `
  query skills($type: [skills_order_by!]){
    skills(order_by: $type) {
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