import { gql } from "@apollo/client/core"

export const GET_VIEWERS = gql `
query viewers {
    
    viewers(order_by: {id: asc}) {
      id
      count
    }
  }
  
  

`