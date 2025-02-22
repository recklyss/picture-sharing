import { useState } from 'react'
import { extractColors } from 'extract-colors'

export interface ColorInfo {
  r: number
  g: number
  b: number
  hex: string
  area: number
}

export const useColorExtractor = () => {
  const [colors, setColors] = useState<ColorInfo[]>([])
  const [dominantColor, setDominantColor] = useState<string | null>(null)

  const extractImageColors = async (imageUrl: string): Promise<void> => {
    try {
      const extractedColors = await extractColors(imageUrl)
      setDominantColor(extractedColors[2].hex)
      setColors(extractedColors.slice(0, 3).map(color => ({
        r: Math.round(color.red * 255),
        g: Math.round(color.green * 255),
        b: Math.round(color.blue * 255),
        hex: color.hex,
        area: color.area
      })))
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