import styled from "styled-components";
import BellIcon from "../../assets/Layout/BellIcon.svg?react";
import LeftArrowIcon from "../../assets/Layout/LeftArrowIcon.svg?react";
import {useLocation, useNavigate} from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const pagesWithBackButton = [
        {path: "/feed/scroll", name: "전체 피드"},
    ];

    const currentPage = pagesWithBackButton.find(page => page.path === location.pathname);
    const isBackButtonPage = currentPage !== undefined;

    return (
        <HeaderWrapper $isBackButtonPage={isBackButtonPage}>
            {!isBackButtonPage ?
                <>
                    <HeaderH1 $isBackButtonPage={isBackButtonPage}>
                        여행 Go
                    </HeaderH1>
                    <button>
                        <BellIcon/>
                    </button>
                </>
                :
                <>
                    <BackButton onClick={() => navigate(-1)}>
                        <LeftArrowIcon/>
                    </BackButton>
                    <HeaderH1 $isBackButtonPage={isBackButtonPage}>
                        {currentPage.name}
                    </HeaderH1>
                </>
            }
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header<{ $isBackButtonPage: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: ${({$isBackButtonPage}) => $isBackButtonPage ? "center" : "space-between"};
    z-index: 500;
    background-color: ${({$isBackButtonPage}) => $isBackButtonPage ? "#FFFFFF" : "#71C9B0"};
    
    @media (min-width: 500px) {
        transform: translateX(-50%);
        left: 50%;
        width: 500px;
    }
`;

const HeaderH1 = styled.h1<{ $isBackButtonPage: boolean }>`
    font-size: ${({$isBackButtonPage}) => $isBackButtonPage ? "16px" : "24px"};
    color: ${({$isBackButtonPage}) => $isBackButtonPage ? "#333333" : "#ffffff"};
    font-weight: 400;
`;

const BackButton = styled.button`
    position: absolute;
    left: 20px;
`;