import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import CarouselSlide from "./CarouselSlide";
import { CarouselProps } from "../../types/Carousel";
import { useEffect, useState } from "react";


export default function CarouselWrapper(props: CarouselProps) {
    const { images } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({delay: 1000})]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                setCurrentIndex(emblaApi.selectedScrollSnap());
            };
            emblaApi.on("select", onSelect);
            onSelect(); // 초기 인덱스 설정
        }
    }, [emblaApi]);

    return (
        <CarouselContainer>
            <Embla ref={emblaRef}>
                <EmblaContainer>
                    {images.map((image, index) => (
                        <EmblaSlide key={index}>
                            <img src={image.url} alt={image.description} />
                        </EmblaSlide>
                    ))}
                </EmblaContainer>
                <SlideNumber>{currentIndex + 1}/{length}</SlideNumber>
            </Embla>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    margin-top: 8px;
    width: 100%;
    max-width: 358px;
    max-height: 152px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;


`;
    
const Embla = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(255, 255, 255); // 불투명하게 설정
`;

const EmblaContainer = styled.div`
    display: flex;
`; 
    
const EmblaSlide = styled.div`
    margin-left: 20px;
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
`;
// 옆에 딱 안 붙도록 margin-left 추가함

const SlideNumber = styled.span`
    position: absolute;
    bottom: 13px;
    right: 16px;
    font-size: 13px;
    line-height: 13px;
    border-radius: 50px;
    background-color: rgba(51, 51, 51, 0.35);
    color: #FFFFFF;
    width: 38px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

