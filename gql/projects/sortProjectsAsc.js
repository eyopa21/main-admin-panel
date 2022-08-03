import { gql } from "@apollo/client/core";

export const SORT_PROJECTS_ASC = gql `
  query projects($type: [projects_order_by!]){
    projects(order_by: $type) {
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