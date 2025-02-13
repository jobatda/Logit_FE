import {useEffect, useState} from "react";
import styled from "styled-components";

import CarouselWrapper from "./components/Carousel/CarouselWrapper";
import SearchBar from "./components/Search/SearchBar";
import PostList from "./components/Post/PostList";

import {Image} from "./types/Carousel";


import dummyCarouselImg from './temp_assets/Frame 1707484734.png'; //test


export default function Thunder() {
    const [images, setImages] = useState<Image[]>([]);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        // API 호출하여 캐러셀 이미지 데이터 가져오기
        const dummyImages: Image[] = [
            {url: dummyCarouselImg, description: "test"},
            {url: dummyCarouselImg, description: "test"},
            {url: dummyCarouselImg, description: "test"}
        ];
        setImages(dummyImages);


    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
    }, []);

    return (
        <ThunderContainer>
            <BackGroundMint/>
            <CarouselWrapper images={images}/>
            <SearchBar search={searchQuery} setQuery={setSearchQuery}/>
            <PostList searchQuery={searchQuery}/>
        </ThunderContainer>
    );
};

const ThunderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
    position: relative;
`;

const BackGroundMint = styled.div`
    background-color: #71C9B0;
    position: absolute;
    height: 147px;
    width: 100vw;
    max-width: 500px;
    top: -50px;
`;

