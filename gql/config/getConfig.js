import { gql } from "@apollo/client/core"

export const GET_CONFIG = gql `
query config {
    config {
    id
    bg_color
    primary_color
  }
}

`