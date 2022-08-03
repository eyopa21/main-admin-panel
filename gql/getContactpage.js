import { gql } from "@apollo/client/core"

export const GET_CONTACTPAGE = gql `
query contactpage {
  contactPage {
    id
    header
    description
  }
}

`