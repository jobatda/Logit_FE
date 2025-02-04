interface Image {
    url: string;
    description: string;
}

interface CarouselProps {
    images: Image[];
}
export type { Image, CarouselProps };