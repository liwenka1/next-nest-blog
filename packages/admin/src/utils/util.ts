export const rgbToRgba = (rgb: string, alpha: string) => {
  // 使用正则表达式解析 RGB 颜色值
  const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
  const result = rgbRegex.exec(rgb)

  if (!result) {
    throw new Error('Invalid RGB color format')
  }

  const r = parseInt(result[1], 10)
  const g = parseInt(result[2], 10)
  const b = parseInt(result[3], 10)

  // 返回 RGBA 颜色值
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
