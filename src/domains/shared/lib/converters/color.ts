export interface RGB {
  r: number;
  g: number;
  b: number;
}

export const hexToRgb = (hex: string): RGB | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgbToRgba = (rgb: RGB | string, alpha: number): string => {
  const color = typeof rgb === 'string' ? hexToRgb(rgb) : rgb;
  if (!color) return `rgba(255, 255, 255, ${alpha})`;
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};
