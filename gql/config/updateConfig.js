import { gql } from "@apollo/client/core";

export const UPDATE_CONFIG = gql `
mutation($bg_color: String!, $primary_color: String!) {
    update_config(where: {id: {_eq: 1}}, _set: {bg_color: $bg_color, primary_color: $primary_color}) {
      returning {
        id
        bg_color
        primary_color
      }
    }
  }
  
`;