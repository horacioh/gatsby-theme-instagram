/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Card"

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
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    data.allInstaNode.edges && (
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mx: -2,
        }}
      >
        {data.allInstaNode.edges.map(({ node }) => (
          <Card key={node.id} post={node} />
        ))}
      </div>
    )
  )
}

export default InstagramGrid
