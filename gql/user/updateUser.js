import { gql } from "@apollo/client/core";

export const UPDATE_USER = gql `
mutation($id: Int!, $location: String!, $logo: String!, $name: String!, $picture: String!) {
  update_user_by_pk(pk_columns: {id: $id}, _set: {location: $location, logo: $logo, name: $name, picture: $picture}) {
    id
    name
  }
}
`;