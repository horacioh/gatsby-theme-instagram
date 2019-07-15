import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function InstagramGrid() {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            likes
            preview
            original
            timestamp
          }
        }
      }
    }
  `)

  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}

export default InstagramGrid;
