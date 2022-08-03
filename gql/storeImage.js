import { gql } from "@apollo/client/core";

export const STORE_IMAGE = gql `
  mutation ($base64: String!) {
    storeImage(arg1: { base64: $base64 }) {
      url
    }
  }
`;