import { useColorExtractor } from './hooks/useColorExtractor'
import { useImageHandler } from './hooks/useImageHandler'
import { ImageUploader } from './components/ImageUploader'
import { ImagePreview } from './components/ImagePreview'
import { ColorPalette } from './components/ColorPalette'

export default function App() {
  const { colors, dominantColor, extractImageColors } = useColorExtractor()
  const { selectedImage, imageAspect, handleImageLoad } = useImageHandler()

  const handleImageSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const imageUrl = await handleImageLoad(file)
      await extractImageColors(imageUrl)
    } catch (error) {
      console.error('Error processing image:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Picture Color Extractor
        </h1>

        <ImageUploader onImageSelect={handleImageSelect} />
      </div>

      {selectedImage && (
        <div className="flex-1 flex gap-2 justify-center items-center">
          <div className="w-1/2 h-[calc(100vh-200px)]">
            <ImagePreview
              imageUrl={selectedImage}
              imageAspect={imageAspect}
              dominantColor={dominantColor}
            />
          </div>
          <div className="h-[calc(100vh-200px)]">
            <ColorPalette colors={colors} />
          </div>
        </div>
      )}
    </div>
  )
}
