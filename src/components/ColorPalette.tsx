import { ColorInfo } from '../hooks/useColorExtractor'

interface ColorPaletteProps {
  colors: ColorInfo[]
}

export const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <div className="h-full flex items-center justify-center overflow-auto">
      <div className="grid grid-cols-3 gap-4 p-4">
        {colors.length > 0 ? (
          colors.map((color, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-24 h-24 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)]" style={{ backgroundColor: color.hex }} />
              <div className="mt-2 space-y-1">
                <div className="text-sm text-gray-600">
                  <div className="font-medium mb-1">HEX</div>
                  <div className="font-mono">{color.hex}</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium mb-1">RGB</div>
                  <div className="font-mono">{color.r},{color.g},{color.b}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No colors extracted</p>
        )}
      </div>
    </div>
  )
} 