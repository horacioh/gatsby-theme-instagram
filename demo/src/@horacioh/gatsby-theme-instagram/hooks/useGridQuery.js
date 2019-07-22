import { useStaticQuery, graphql } from "gatsby"

export default function useGridQuery() {
  return useStaticQuery(graphql`
    query {
      allInstaNode(limit: 8) {
        edges {
          node {
            id
            username
            likes
            comments
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
}
