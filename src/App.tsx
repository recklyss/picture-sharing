import { useColorExtractor } from './hooks/useColorExtractor'
import { useImageHandler } from './hooks/useImageHandler'
import { useScreenshot } from './hooks/useScreenshot'
import { ImageUploader } from './components/ImageUploader'
import { ImagePreview } from './components/ImagePreview'
import { ColorPalette } from './components/ColorPalette'

export default function App() {
  const { colors, dominantColor, extractImageColors } = useColorExtractor()
  const { selectedImage, imageAspect, handleImageLoad } = useImageHandler()
  const { captureScreenshot } = useScreenshot()

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
        <>
          <div className="screenshot-area grid grid-cols-7 gap-1 p-8 bg-white">
            <div className="col-span-4 h-[calc(100vh-200px)]">
              <ImagePreview
                imageUrl={selectedImage}
                imageAspect={imageAspect}
                dominantColor={dominantColor}
              />
            </div>
            <div className="col-span-3 h-[calc(100vh-200px)]">
              <ColorPalette colors={colors} />
            </div>
          </div>

          <div className="flex justify-center p-4">
            <button 
              onClick={() => captureScreenshot('.screenshot-area')} 
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
            >
              Download Image
            </button>
          </div>
        </>
      )}
    </div>
  )
}
