import { gql } from "@apollo/client/core";

export const GET_PROJECT = gql `
  query projects($id: Int!) {
    projects_by_pk(id: $id) {
      id
      title
      subtitle
      description
      link
      pricture
      created_at
      updated_at
      project_skills {
        project_id
        skill_id
        skill {
          id
          level
          icon
          skill_name
        }
      }
    }
  }
`;