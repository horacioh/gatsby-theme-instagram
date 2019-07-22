/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Img from "gatsby-image"
import HeartIcon from "./HeartIcon"
import CommentIcon from "./CommentIcon"

export default function ComplexCard({
  id,
  likes,
  comments,
  username,
  localFile,
}) {
  return (
    <a
      href={`https://www.instagram.com/p/${id}/`}
      target="_blank"
      // tabindex={tabIndex}
      sx={{
        position: "relative",
        display: "block",
        boxSizing: "border-box",
        width: ["100%", "50%", "33.3333%"],
        textDecoration: "none",
        p: 2,
      }}
    >
      <div
        sx={{
          bg: "white",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow:
            "0 13px 27px -5px rgba(50,50,93,.05), 0 8px 16px -8px rgba(0,0,0,.05), 0 -6px 16px -6px rgba(0,0,0,.015)",
        }}
      >
        <div sx={{ p: 3, bg: "white" }}>
          <p
            sx={{
              m: 0,
              p: 0,
              color: "black",
              fontSize: 1,
              fontWeight: "bold",
            }}
          >
            {username}
          </p>
        </div>
        <div sx={{ px: 3 }}>
          <Img fluid={localFile.childImageSharp.fluid} />
        </div>
        <div sx={{ p: 3, bg: "white" }}>
          <Flex sx={{ mb: 2 }}>
            <Flex sx={{ mr: 1, alignItems: "center" }}>
              <HeartIcon fill="black" />
              <p
                sx={{
                  m: 0,
                  p: 0,
                  fontWeight: "bold",
                  color: "black",
                  lineHeight: 1,
                  fontSize: [2, 1, 0],
                  mx: 1,
                }}
              >
                {likes}
              </p>
            </Flex>
            <Flex sx={{ alignItems: "center" }}>
              <CommentIcon fill="black" />
              <p
                sx={{
                  m: 0,
                  p: 0,
                  fontWeight: "bold",
                  color: "black",
                  lineHeight: 1,
                  fontSize: [2, 1, 0],
                  mx: 1,
                }}
              >
                {comments}
              </p>
            </Flex>
          </Flex>
          {/* <p sx={{ m: 0, p: 0, fontSize: 0, color: "black" }}>{caption}</p> */}
        </div>
      </div>
    </a>
  )
}
