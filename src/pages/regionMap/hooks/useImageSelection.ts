import {useEffect, useState} from 'react';
import {SELECTED_IMAGES} from "../util/const.ts";
import postMap from "../../../apis/regionMap/postMap.ts";
import getMap from "../../../apis/regionMap/getMap.ts";

export const useImageSelection = () => {
    const [selectedModal, setSelectedModal] = useState<{ isOpen: boolean; name: string; }>({
        isOpen: false,
        name: '',
    });
    const [selectedImages, setSelectedImages] = useState<{ region: string, background: string }[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await getMap();
            setSelectedImages(result);
        }
        fetchImages();
    }, []);

    const patchRegion = async (region: string, background: string) => {
        const result = await postMap(region, background);
    };

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
                        setSelectedImages(prev => {
                            const existingRegion = prev.find(item => item.region === selectedModal.name);
                            // 해당 region이 존재하면 업데이트, 존재하지 않으면 새로운 항목을 추가
                            if (existingRegion) {
                                return prev.map(item =>
                                    item.region === selectedModal.name
                                        ? {...item, background: result}
                                        : item
                                );
                            } else {
                                patchRegion(selectedModal.name, result);
                                return [
                                    ...prev,
                                    {region: selectedModal.name, background: result}
                                ];
                            }
                        });
                    }
                };
                reader.readAsDataURL(target.files[0]);
            }
        };
        input.click();
    };

    const handleColorClick = (colorName: string) => {
        setSelectedImages(prev => {
            const index = prev.findIndex(item => item.region === selectedModal.name);

            if (index !== -1) {
                const updatedImages = [...prev];
                updatedImages[index] = {...updatedImages[index], background: colorName};
                return updatedImages;
            }

            patchRegion(selectedModal.name, colorName);
            return [...prev, {region: selectedModal.name, background: colorName}];
        });
    };

    const getFillStyle = (pathId: string): string => {
        const value = selectedImages.find(item => item.region === pathId)?.background;
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
        setSelectedImages,
    };
};
