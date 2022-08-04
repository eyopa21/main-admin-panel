import { gql } from "@apollo/client/core";

export const GET_PROJECTS = gql `
  query projects {
    projects(order_by: {id: asc}) {
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