import styled from "styled-components";
import {useState} from "react";
import SearchIcon from "../../assets/feed/SearchIcon.svg?react";
import LocationIcon from "../../assets/feed/LocationIcon.svg?react";
import FeedPlusIcon from "../../assets/feed/FeedPlusIcon.svg?react";
import test1 from "../../assets/feed/test1.png";
import test2 from "../../assets/feed/test2.png";
import test3 from "../../assets/feed/test3.png";

const posts = [
    {
        user: "안농 12asdasdadsadsadasdasdsadassaasdasadsads3",
        location: "전북 무asdasdasaasdasdsdasdadsadsasd주",
        img: test1,
    },
    {
        user: "안농 123",
        location: "전북 무주",
        img: test2,
    },
    {
        user: "안농 123",
        location: "전북 무주",
        img: test3,
    },
    {
        user: "안농 123",
        location: "전북 무주",
        img: test2,
    },
    {
        user: "안농 123",
        location: "전북 무주",
        img: test3,
    },
    {
        user: "안농 12asdasdadsadsadasdasdsadassaasdasadsads3",
        location: "전북 무asdasdasaasdasdsdasdadsadsasd주",
        img: test1,
    },
];

export default function Feed() {
    const [selectedFilter, setSelectedFilter] = useState("인기순");

    return (
        <>
            <TabsList>
                {["피드", "축제", "체험"].map((tab) => (
                    <Tab key={tab}>{tab}</Tab>
                ))}
            </TabsList>
            <SearchInputDiv>
                <SearchIcon/>
                <SearchInput type="text"/>
            </SearchInputDiv>
            <Filter>
                <FilterButton
                    onClick={() => setSelectedFilter("인기순")}
                    $isSelected={selectedFilter === "인기순"}
                >
                    인기순
                </FilterButton>
                <StyledHr/>
                <FilterButton
                    onClick={() => setSelectedFilter("최신순")}
                    $isSelected={selectedFilter === "최신순"}
                >
                    최신순
                </FilterButton>
                <StyledHr/>
                <FilterButton
                    onClick={() => setSelectedFilter("팔로잉")}
                    $isSelected={selectedFilter === "팔로잉"}
                >
                    팔로잉
                </FilterButton>
            </Filter>
            <FeedGrid>
                {posts.map((post, index) => (
                    <FeedItem key={index}>
                        <FeedImage src={post.img}/>
                        <UserInfoDiv>
                            <UserImage src={post.img}/>
                            <UserInfo>{post.user}</UserInfo>
                        </UserInfoDiv>
                        <LocationInfoDiv>
                            <LocationIcon/>
                            <LocationInfo>{post.location}</LocationInfo>
                        </LocationInfoDiv>
                    </FeedItem>
                ))}
            </FeedGrid>
            <PlusButton>
                <FeedPlusIcon/>
            </PlusButton>
        </>
    );
}

const TabsList = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #F8F8F8;
`;

const Tab = styled.div`
    min-width: 48px;
    text-align: center;
    border-bottom: 2px solid #71C9B0;
`;

const SearchInputDiv = styled.div`
    margin-top: 16px;
    display: flex;
    background-color: #F8F8F8;
    border-radius: 13px;
    padding: 6px 16px;
    gap: 8px;
    align-items: center;
`;

const SearchInput = styled.input`
    background-color: inherit;
`;

const Filter = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 6px;
    justify-content: right;
`;

const FilterButton = styled.button<{ $isSelected: boolean }>`
    font-size: 12px;
    font-weight: ${({$isSelected}) => ($isSelected ? "600" : "400")};
    color: #A1A1A1;
`;

const StyledHr = styled.hr`
    border: none;
    width: 1px;
    background-color: #D9D9D9;
`;

const FeedGrid = styled.div`
    column-count: 2;
    margin-top: 20px;
    column-gap: 10px;
`;

const FeedItem = styled.div`
    width: 100%;
    break-inside: avoid;
    margin-bottom: 20px;
`;

const FeedImage = styled.img`
    min-height: 110px;
    max-height: 233px;
    width: 100%;
    border-radius: 10px;
`;

const UserInfoDiv = styled.div`
    margin-top: 5px;
    gap: 6px;
    display: flex;
    align-items: center;
`;

const UserInfo = styled.div`
    font-size: 12px;
    color: #606060;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const UserImage = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

const LocationInfoDiv = styled.div`
    margin-top: 4px;
    display: flex;
    gap: 8px;
    align-items: center;
`;

const LocationInfo = styled.div`
    font-size: 12px;
    color: #A1A1A1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const PlusButton = styled.button`
    position: fixed;
    bottom: 96px;
    right: 28px;
`;