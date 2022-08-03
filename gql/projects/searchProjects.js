import { gql } from "@apollo/client/core";

export const SEARCH_PROJECTS = gql `
  query search($search: String!) {
    projects(
      where: {
        _or: [
          { title: { _ilike: $search } }
          { subtitle: { _ilike: $search } }
          { description: { _ilike: $search } }
          { link: { _ilike: $search } }
        ]
      }
    ) {
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