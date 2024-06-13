import React from 'react'
import ContentLoader from 'react-content-loader'
import {ShimmerButton, ShimmerThumbnail} from "react-shimmer-effects"

const MainpageShimmer = () => {

    const rows = 2
  const columns = 5
  const coverHeight = 400
  const coverWidth = 300
  const padding = 5
  const speed = 5

  const coverHeightWithPadding = coverHeight + padding
  const coverWidthWithPadding = coverWidth + padding
  const initial = 35
  const covers = Array(columns * rows).fill(1)

  return (
    <div className='bg-gray-800'>
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      primaryColor="#242b34"
      secondaryColor="#343d4c"
      backgroundColor='bg-gray-700'
    >
      <rect
        x="0"
        y="0"
        rx="0"
        ry="0"
        width={columns * coverWidthWithPadding - padding}
        height="20"
      />

      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="0"
            ry="0"
            width={coverWidth}
            height={coverHeight}
          />
        )
      })}
    </ContentLoader>
    </div>
  )

}

export default MainpageShimmer