/** @jsx jsx */
import { jsx } from "theme-ui"
import GridCard from "./GridCard"
import useGridQuery from '../hooks/useGridQuery'

function InstagramGrid() {
  const data = useGridQuery()

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
          <GridCard key={node.id} post={node} />
        ))}
      </div>
    )
  )
}

export default InstagramGrid
