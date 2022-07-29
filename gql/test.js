import { gql } from "@apollo/client/core"

export const GET_POSTS = gql `
  query homepage {
  homePage {
    header
    id
  }
}

`