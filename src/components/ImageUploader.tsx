interface ImageUploaderProps {
  onImageSelect: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const ImageUploader = ({ onImageSelect }: ImageUploaderProps) => {
  return (
    <div className="mb-8">
      <input
        type="file"
        accept="image/*"
        onChange={onImageSelect}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="block p-8 text-center cursor-pointer bg-white hover:bg-gray-50 rounded-lg transition-colors border-2 border-dashed border-gray-300"
      >
        Click or drag to upload an image
      </label>
    </div>
  )
} 