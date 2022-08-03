import { gql } from "@apollo/client/core";

export const SEARCH_SKILLS = gql `
  query search($search: String!) {
    skills(
      where: {
        _or: [
          { skill_name: { _ilike: $search } }
         
          
        ]
      }
    ) {
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