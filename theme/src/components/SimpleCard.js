/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Img from "gatsby-image"
import HeartIcon from "./HeartIcon"
import CommenttIcon from "./CommentIcon"

export default function SimpleCard({ id, likes, comments, localFile }) {
  return (
    <a
      href={`https://www.instagram.com/p/${id}/`}
      target="_blank"
      // tabindex={tabIndex}
      sx={{
        position: "relative",
        bg: "white",
        borderWidth: 1,
        borderColor: `smoke`,
        borderRadius: 2,
        boxSizing: "border-box",
        p: 2,
        width: ["100%", "50%", "25%"],
        // paddingBottom: `50%`,
        overflow: "hidden",
        ":hover": {
          cursor: "pointer",
          div: {
            opacity: 1,
          },
        },
      }}
    >
      <div
        sx={{
          backgroundColor: `rgba(0,0,0,0.4)`,
          position: "absolute",
          top: 2,
          right: 2,
          bottom: 2,
          left: 2,
          zIndex: 2,
          transition: `opacity ease 0.25s`,
          opacity: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {likes && (
          <Flex sx={{ mx: 2 }}>
            <HeartIcon fill="white" />
            <p
              sx={{
                m: 0,
                p: 0,
                fontWeight: "bold",
                color: "white",
                lineHeight: 1,
                fontSize: [2, 1, 0],
                mx: 1,
              }}
            >
              {likes}
            </p>
          </Flex>
        )}
        {comments && (
          <Flex sx={{ mx: 2 }}>
            <CommenttIcon fill="white" />
            <p
              sx={{
                m: 0,
                p: 0,
                fontWeight: "bold",
                color: "white",
                lineHeight: 1,
                fontSize: [2, 1, 0],
                mx: 1,
              }}
            >
              {comments}
            </p>
          </Flex>
        )}
      </div>
      <Img fluid={localFile.childImageSharp.fluid} />
    </a>
  )
}
