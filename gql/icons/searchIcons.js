import { gql } from "@apollo/client/core";

export const SEARCH_ICONS = gql `
  query icons($search: String!) {
    icons(where: { _or: [{ name: { _ilike: $search } }] }) {
      id
      name
      svg
    }
  }
`;