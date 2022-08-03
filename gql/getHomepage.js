import { gql } from "@apollo/client/core"

export const GET_HOMEPAGE = gql `
query homepage {
  homePage {
    id
    header
    description
  }
}


`