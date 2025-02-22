import { ImageAspect } from '../hooks/useImageHandler'

interface ImagePreviewProps {
  imageUrl: string
  imageAspect: ImageAspect
  dominantColor: string | null
}

export const ImagePreview = ({ imageUrl, imageAspect, dominantColor }: ImagePreviewProps) => {
  return (
    <div className="h-full flex items-center justify-center p-8 relative">
      {/* Background banner - vertical for landscape, horizontal for portrait */}
      <div 
        className={`absolute ${
          imageAspect === 'landscape' 
            ? 'w-[45%] h-full left-1/2 -translate-x-1/2' 
            : 'h-[45%] w-full top-1/2 -translate-y-1/2'
        }`}
        style={{ backgroundColor: dominantColor || '#5A6240' }}
      />
      
      {/* Image container */}
      <div 
        className={`relative overflow-hidden max-h-full ${
          imageAspect === 'portrait' 
            ? 'aspect-[9/16] h-[90%]' 
            : 'aspect-[16/9] w-[90%]'
        }`}
        style={{
          boxShadow: '0 10px 50px rgba(20, 27, 21, 0.3), 0 3px 6px rgba(50, 45, 57, 0.2)',
          backgroundColor: '#fff'
        }}
      >
        <img
          className="w-full h-full object-cover"
          alt="Uploaded image"
          src={imageUrl}
          crossOrigin="anonymous"
        />
      </div>
    </div>
  )
} 