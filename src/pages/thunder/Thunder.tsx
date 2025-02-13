import {useEffect, useState} from "react";
import styled from "styled-components";
import ThunderPlusIcon from "../../assets/thunder/ThunderPlusIcon.svg?react";

import CarouselWrapper from "./components/Carousel/CarouselWrapper";
import SearchBar from "./components/Search/SearchBar";
import PostList from "./components/Post/PostList";

import {Image} from "./types/Carousel";


import dummyCarouselImg from './temp_assets/Frame 1707484734.png';
import {useNavigate} from "react-router-dom"; //test


export default function Thunder() {
    const navigate =useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
    }, []);

    return (
        <ThunderContainer>
            {/* <BackGroundMint/> */}
            <CarouselWrapper/>
            <SearchBar search={searchQuery} setQuery={setSearchQuery}/>
            <PostList searchQuery={searchQuery}/>
            <StyledButton onClick={()=>navigate("/regionMap")}>
                <ThunderPlusIcon/>
            </StyledButton>
        </ThunderContainer>
    );
};

const StyledButton = styled.button`
    border-radius: 50%;
    background-color: #71C9B0;
    padding: 9px;
    position: fixed;
    bottom: 96px;
    right: 30px;

    @media (min-width: 500px) {
        right: calc(50vw - 220px);
    }
`;

const ThunderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #FFFFFF;
    position: absolute;
    width: 100vw;
    max-width: 500px;
    left: 0;
    // padding: 0 16px;
`;

const BackGroundMint = styled.div`
    // background-color: #71C9B0;
    // position: absolute;
    // height: 19vh;
    // width: 100vw;
    // max-width: 500px;
    // top: -50px;
    // padding-top: 36%; /* 높이를 비율로 설정 */
`;

