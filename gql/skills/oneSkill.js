import { gql } from "@apollo/client/core";

export const GET_SKILL = gql `
  query skills($id: Int!) {
    
    skills_by_pk(id: $id) {
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