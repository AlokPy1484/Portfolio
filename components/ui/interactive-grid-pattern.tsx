"use client"

import React, { useState } from "react"

import { cn } from "@/lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  className?: string
  squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)
  const [activeSquare, setActiveSquare] = useState<number[]>([
  127, 75, 179, 231, 74, 178, 230, 282, 21, 177,
  229, 279, 20, 124, 72, 123, 71, 69, 121, 173,
  225, 66, 116, 168, 219, 111, 213, 315, 263, 0,
  156, 1, 53, 105,
  87, 139, 191, 347, 137, 189, 241, 293, 29, 31,
  135, 187, 239, 291, 343, 133, 185, 339, 287, 286,
  285, 337, 338, 78, 26
]

)
  

    const toggleActive = (index: number) => {
    setActiveSquare((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // unselect
        : [...prev, index] // select
    )
  }


  

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/30",
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width
        const y = Math.floor(index / horizontal) * height
        const isActive = activeSquare.includes(index)
        const isHovered = hoveredSquare === index
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              isActive
                ? "fill-green-500" // permanent color
                : isHovered
                ? "fill-gray-300/30" // hover color
                : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onClick={() => toggleActive(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        )
      })}
    </svg>
  )
}
