import { useState } from 'react';

export const useImageSelection = () => {
  const [selectedImages, setSelectedImages] = useState<{[key: string]: string}>({});

  const handlePathClick = (pathId: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files?.[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            setSelectedImages(prev => ({
              ...prev,
              [pathId]: result
            }));
          }
        };
        reader.readAsDataURL(target.files[0]);
      }
    };
    input.click();
  };

  return {
    selectedImages,
    handlePathClick
  };
};