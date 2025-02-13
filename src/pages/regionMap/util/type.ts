export interface RegionProps {
    toggleIsOpen: (pathId: string) => void;
    selectedImages: { region: string; background: string }[];
    getFillStyle: (pathId: string) => string;
}
