import styled from "styled-components";
import BellIcon from "../../assets/Layout/BellIcon.svg?react";

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderH1>
                여행 Go
            </HeaderH1>
            <button>
                <BellIcon/>
            </button>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 500;
    background-color: ${({theme}) => theme.MainColor};

    @media (min-width: 500px) {
        transform: translateX(-50%);
        left: 50%;
        width: 500px;
    }
`;

const HeaderH1 = styled.h1`
    font-size: 24px;
    color: white;
`;