import { gql } from "@apollo/client/core"

export const GET_ABOUTPAGE = gql `
query aboutpage {
    aboutPage {
      id
      header
      description
      picture
    }
  }

`