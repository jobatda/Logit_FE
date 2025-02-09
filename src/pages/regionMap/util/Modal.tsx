import styled from "styled-components";
import Row from "../../../styles/Common/Row.ts";
import LocationIcon from "../../../assets/feed/LocationIcon.svg?react"
import CloseIcon from "../../../assets/regionMap/CloseIcon.svg?react"
import GalleryIcon from "../../../assets/regionMap/GalleryIcon.svg?react"
import PaintIcon from "../../../assets/regionMap/PaintIcon.svg?react"
import {useEffect, useState} from "react";

interface ModalProps {
    selectedModal: { isOpen: boolean; name: string; }
    toggleIsOpen: (pathId: string) => void;
    handlePathClick: () => void;
    handleColorClick: (colorName: string) => void;
}

const colors = ['#FF4015', '#FFAB01', '#FEFB41', '#76BB40', '#00A1D8', '#4D22B2', '#982ABC']; // 색상 배열

export default function Modal({selectedModal, toggleIsOpen, handlePathClick, handleColorClick}: ModalProps) {
    const [selectDraw, setSelectDraw] = useState<boolean>(false);

    useEffect(() => {
        setSelectDraw(false);
    }, [selectedModal.name]);

    if (!selectedModal.isOpen) return null;
    return (
        <ModalWrapper>
            <Row $horizonAlign="distribute" $verticalAlign="center">
                <Row $gap={5} $verticalAlign="center">
                    <LocationIcon/>
                    <ModalRegionName>{selectedModal.name}</ModalRegionName>
                </Row>
                <button onClick={() => {
                    toggleIsOpen(selectedModal.name);
                    setSelectDraw(false);
                }}>
                    <CloseIcon/>
                </button>
            </Row>
            {selectDraw ?
                <Row $horizonAlign="center" $gap={16}>
                    {colors.map((colorName) => (
                        <ColorButton
                            key={colorName}
                            style={{backgroundColor: colorName}}
                            onClick={() => handleColorClick(colorName)}
                        />
                    ))}
                </Row>
                :
                <Row $horizonAlign="even">
                    <Button onClick={() => {
                        handlePathClick();
                        setSelectDraw(false);
                    }}>
                        <GalleryIcon/>
                        <div>사진 넣기</div>
                    </Button>
                    <StyledHr/>
                    <Button onClick={() => setSelectDraw(true)}>
                        <PaintIcon/>
                        <div>색칠 하기</div>
                    </Button>
                </Row>
            }

        </ModalWrapper>
    );
}

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    background-color: white;
    padding: 16px 25px 30px;
    box-shadow: 0 -4px 4px rgba(172, 172, 172, 0.1);
    border-radius: 15px;
    position: fixed;
    left: 0;
    bottom: 80px;
    width: 100%;

    @media (min-width: 500px) {
        transform: translateX(-50%);
        left: 50%;
        width: 500px;
    }
`;

const ModalRegionName = styled.div`
    color: #333333;
    font-weight: 500;
`;

const Button = styled.button`
    gap: 7px;
    color: #606060;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
`;

const StyledHr = styled.hr`
    border: none;
    width: 1px;
    height: 24px;
    background-color: #D9D9D9;
`;

const ColorButton = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;