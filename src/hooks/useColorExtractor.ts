import { useState } from 'react'
import { extractColors } from 'extract-colors'

export interface ColorInfo {
  r: number
  g: number
  b: number
  hex: string
  area: number
  percentage: string
}

export const useColorExtractor = () => {
  const [colors, setColors] = useState<ColorInfo[]>([])
  const [dominantColor, setDominantColor] = useState<string | null>(null)

  const extractImageColors = async (imageUrl: string): Promise<void> => {
    try {
      const extractedColors = await extractColors(imageUrl)
      const totalArea = extractedColors.reduce((sum, color) => sum + color.area, 0)
      const sortedColors = extractedColors.slice(0, 6).map(color => ({
        r: Math.round(color.red * 255),
        g: Math.round(color.green * 255),
        b: Math.round(color.blue * 255),
        hex: color.hex,
        area: color.area,
        percentage: ((color.area / totalArea) * 100).toFixed(2) + '%'
      })).sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage))
      .slice(0, 3)
      setColors(sortedColors)
      setDominantColor(sortedColors[2].hex)
    } catch (error) {
      console.error('Error extracting colors:', error)
      setColors([])
      setDominantColor(null)
    }
  }

  return {
    colors,
    dominantColor,
    extractImageColors
  }
} 