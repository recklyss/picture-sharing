# Picture Color Extractor

A modern web application built with React, TypeScript, and Tailwind CSS that extracts and displays the dominant colors from uploaded images. The app features a beautiful, responsive UI that adapts to different image orientations and provides both HEX and RGB color values.

## Features

- 📸 Image pick and preview
- 🎨 Extracts dominant colors from images
- 📊 Color display in both HEX and RGB formats
- 🎯 Maintains image aspect ratio (16:9 for landscape, 9:16 for portrait)

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- extract-colors (for color extraction)

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pic-sharing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

## Usage

1. Click the upload area or drag and drop an image
2. The image will be displayed with a dynamic background banner
3. Extracted colors will be shown on the right side with their HEX and RGB values

## Project Structure

```
src/
├── components/
│   ├── ColorPalette.tsx    # Color display component
│   ├── ImagePreview.tsx    # Image preview with dynamic banner
│   └── ImageUploader.tsx   # File upload component
├── hooks/
│   ├── useColorExtractor.ts # Color extraction logic
│   └── useImageHandler.ts   # Image handling and aspect ratio detection
├── App.tsx                  # Main application component
└── main.tsx                # Application entry point
```

## Development

The project uses:
- ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for fast development and building

## License

MIT
