export const generateId = (prefix: string): string => {
  return `${prefix}-${Date.now()}`;
};

export const generateProducerId = (): string => generateId('producer');
export const generateFarmId = (): string => generateId('farm');
export const generateCropId = (): string => generateId('crop');
