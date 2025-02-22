import html2canvas from 'html2canvas'

export const useScreenshot = () => {
  const captureScreenshot = async (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement
    if (!element) return

    try {
      const canvas = await html2canvas(element, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      })

      const link = document.createElement('a')
      link.download = 'color-palette.png'
      link.href = canvas.toDataURL('image/png', 1.0)
      link.click()
    } catch (error) {
      console.error('Failed to capture screenshot:', error)
    }
  }

  return { captureScreenshot }
} 