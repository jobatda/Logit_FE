export interface RegionProps {
    toggleIsOpen: (pathId: string) => void;
    selectedImages: { [key: string]: string };
    getFillStyle: (pathId: string) => string;
}
