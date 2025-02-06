import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

import CarouselWrapper from "./components/Carousel/CarouselWrapper";
import SearchBar from "./components/Search/SearchBar";
import PostList from "./components/Post/PostList";

import { Image } from "./types/Carousel";

import { Post } from "./types/Post";

import dummyCarouselImg from './temp_assets/Frame 1707484734.png'; //test
import dummyPostImg from './temp_assets/Frame 1707484749.png'; //test

export default function Thunder() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    // API 호출하여 캐러셀 이미지 데이터 가져오기
    const dummyImages:Image[] = [
      { url: dummyCarouselImg, description: "test" },
      { url: dummyCarouselImg, description: "test" },
      { url: dummyCarouselImg, description: "test" }
    ];
    setImages(dummyImages);

    // API 호출하여 게시물 데이터 가져오기
    const dummyPosts:Post[] = [
      { id: 1, isAI: false, image: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" },
      { id: 2, isAI: true, image: dummyPostImg, title: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", currentPeople: 2, totalPeople: 4, days: 5, travelDate: "2023-11-15", location: "Maldives" },
      { id: 3, isAI: false, image: dummyPostImg, title: "Mountain Hiking", currentPeople: 5, totalPeople: 10, days: 3, travelDate: "2023-10-20", location: "Swiss Alps" },
      { id: 4, isAI: true, image: dummyPostImg, title: "City Tour", currentPeople: 1, totalPeople: 3, days: 2, travelDate: "2023-09-10", location: "New York" },
      { id: 5, isAI: false, image: dummyPostImg, title: "Desert Safari", currentPeople: 4, totalPeople: 6, days: 4, travelDate: "2023-08-05", location: "Dubai" }
    ];
    setPosts(dummyPosts);
    // axios.get("/api/posts") // API 호출
    // .then(response => {
    //   setPosts(response.data);
    // })
    // .catch(error => {
    //   console.error("Error fetching posts:", error);
    // });
  }, []);

    const handlePostClick = (postId: number) => {
        navigate(`/Thunder/${postId}`);
    }

  return (
    <ThunderContainer>
      <BackGroundMint/>
      <CarouselWrapper images={images} />
      <SearchBar search={searchQuery} setQuery={setSearchQuery} />
      <PostList posts={posts} onPostClick={handlePostClick} />
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
  width: 100%;
  height: 97px;
  position: absolute;
  top: 0;
`;

