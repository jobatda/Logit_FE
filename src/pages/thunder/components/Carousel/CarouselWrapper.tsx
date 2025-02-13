import styled from "styled-components";
import ThunderBanner from "../../../../assets/thunder/ThunderBanner.png"

export default function CarouselWrapper() {

    return (
        <CarouselContainer>
            <BackgroundMint/>
            <Embla>
                <EmblaContainer>
                    <img src={ThunderBanner}/>
                </EmblaContainer>
            </Embla>
        </CarouselContainer>
    )
}

const BackgroundMint = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 58%;
    background-color: #71C9B0;
`;

const CarouselContainer = styled.div`
    padding: 8px 16px 0 16px;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

const Embla = styled.div`
    overflow: hidden;
    border-radius: 10px;
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
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

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