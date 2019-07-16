/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

function Card({ post }) {
  return <div sx={{
    bg: "white",
    borderWidth: 1,
    borderColor: `smoke`,
    borderRadius: 2,
    boxSizing: 'border-box',
    p:2,
    width: ['100%', '33.3333%', '25%'],
    // paddingBottom: `50%`,
    overflow: 'hidden'
  }}>
    <Img fluid={post.localFile.childImageSharp.fluid} />
  </div>
}

export default Card;
