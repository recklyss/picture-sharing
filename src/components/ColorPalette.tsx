import { ColorInfo } from '../hooks/useColorExtractor'

interface ColorPaletteProps {
  colors: ColorInfo[]
}

export const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full grid grid-cols-3 gap-8">
        {colors.length > 0 ? (
          colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)]" 
                style={{ backgroundColor: color.hex }} 
              />
              <div className="mt-4 space-y-2 text-center">
                <div className="text-sm text-gray-600">
                  <div className="font-medium">HEX</div>
                  <div className="font-mono">{color.hex}</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">RGB</div>
                  <div className="font-mono">{color.r.toString().slice(0, 3)},{color.g.toString().slice(0, 3)},{color.b.toString().slice(0, 3)}</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">Percentage</div>
                  <div className="font-mono">{color.percentage}</div>
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