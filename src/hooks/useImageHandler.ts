import { useState } from 'react'

export type ImageAspect = 'portrait' | 'landscape'

export const useImageHandler = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageAspect, setImageAspect] = useState<ImageAspect>('landscape')

  const handleImageLoad = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string
        setSelectedImage(dataUrl)

        const img = new Image()
        img.crossOrigin = "Anonymous"
        img.src = dataUrl
        img.onload = () => {
          setImageAspect(img.width > img.height ? 'landscape' : 'portrait')
          resolve(dataUrl)
        }
        img.onerror = reject
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  return {
    selectedImage,
    imageAspect,
    handleImageLoad
  }
} 