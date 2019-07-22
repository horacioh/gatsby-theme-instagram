import { useStaticQuery, graphql } from "gatsby"

export default function useGridQuery() {
  return useStaticQuery(graphql`
    query {
      allInstaNode(limit: 8) {
        edges {
          node {
            id
            likes
            comments
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
}
