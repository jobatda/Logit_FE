import {useState} from 'react';
import {SELECTED_IMAGES} from "../util/const.ts";

export const useImageSelection = () => {
    const [selectedModal, setSelectedModal] = useState<{ isOpen: boolean; name: string; }>({
        isOpen: false,
        name: '',
    });
    const [selectedImages, setSelectedImages] = useState<{ [key: string]: string }>(SELECTED_IMAGES);

    const toggleIsOpen = (pathId: string) => {
        setSelectedModal(prev => ({
            name: pathId,
            isOpen: prev.name === pathId ? !prev.isOpen : true,
        }));
    };

    const handlePathClick = () => {
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
                            [selectedModal.name]: result
                        }));
                    }
                };
                reader.readAsDataURL(target.files[0]);
            }
        };
        input.click();
    };

    const handleColorClick = (colorName: string) => {
        setSelectedImages(prev => ({
            ...prev,
            [selectedModal.name]: colorName
        }));
    };

    const getFillStyle = (pathId: string): string => {
        const value = selectedImages[pathId];
        if (!value) return '#FFFFFF';

        if (value.startsWith('data:image')) {
            return `url(#pattern-${pathId})`;
        }

        return value;
    };
    return {
        selectedImages,
        handlePathClick,
        handleColorClick,
        selectedModal,
        toggleIsOpen,
        getFillStyle,
    };
};
