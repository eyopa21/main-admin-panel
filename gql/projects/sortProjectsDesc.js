import { gql } from "@apollo/client/core";

export const SORT_PROJECTS_DESC = gql `
  query projects{
    projects(order_by: { title: desc }) {
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