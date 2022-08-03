import { gql } from "@apollo/client/core"

export const GET_SKILLS_PAGE = gql `
query skillspage {
  skillsPage {
    id
    header
    description
  }
}


`