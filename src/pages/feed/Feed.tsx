import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/feed/SearchIcon.svg?react";
import LocationIcon from "../../assets/feed/LocationIcon.svg?react";
import PhotosIcon from "../../assets/feed/PhotosIcon.svg?react";
import FeedPlusIcon from "../../assets/feed/FeedPlusIcon.svg?react";
import { useNavigate } from "react-router-dom";
import getFeeds from "../../apis/feed/getFeeds.ts";

interface feedType {
    "userId": number,
    "postId": number,
    "postTitle": string,
    "postContent": string,
    "postContentImage": string[]
    "postDate": string,
    "postLocation": string,
    "postCategory": string,
    "postTravelNum": number
}

export default function Feed() {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState("인기순");
    const [selectedTab, setSelectedTab] = useState("feed");
    const [feeds, setFeeds] = useState<feedType[]>([]);

    useEffect(() => {
        const fetchFeeds = async () => {
            const result: feedType[] = await getFeeds(selectedTab);
            setFeeds(result);
        }
        fetchFeeds();
    }, [selectedTab])

    const tabNames: Record<string, string> = {
        feed: "피드",
        festival: "축제",
        experience: "체험"
    };

    return (
        <>
            <TabsList>
                {["feed", "festival", "experience"].map((tab) => (
                    <Tab
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        $isSelected={selectedTab === tab}
                    >
                        {tabNames[tab]} {/* 한글로 변경된 부분 */}
                    </Tab>
                ))}
            </TabsList>
            <SearchInputDiv>
                <SearchIcon color="#606060" />
                <SearchInput type="text" />
            </SearchInputDiv>
            <Filter>
                <FilterButton
                    onClick={() => setSelectedFilter("인기순")}
                    $isSelected={selectedFilter === "인기순"}
                >
                    인기순
                </FilterButton>
                <StyledHr />
                <FilterButton
                    onClick={() => setSelectedFilter("최신순")}
                    $isSelected={selectedFilter === "최신순"}
                >
                    최신순
                </FilterButton>
                <StyledHr />
                <FilterButton
                    onClick={() => setSelectedFilter("팔로잉")}
                    $isSelected={selectedFilter === "팔로잉"}
                >
                    팔로잉
                </FilterButton>
            </Filter>
            <FeedGrid>
                {feeds.map((post: feedType) => (
                    <FeedItem key={post.postId} onClick={() => navigate("/feed/scroll", { state: { feedId: post.postId } })}>
                        <FeedImageContainer>
                            {post.postContentImage.length > 1 && (
                                <MoreImage>
                                    <PhotosIcon />
                                </MoreImage>
                            )}
                            <img src={`data:image/png;base64,${post.postContentImage[0]}`} alt="" />
                        </FeedImageContainer>
                        <UserInfoDiv>
                            {/*<UserImage src={post.img}/>*/}
                            <UserInfo>{post.userId}</UserInfo>
                        </UserInfoDiv>
                        <LocationInfoDiv>
                            <LocationIcon />
                            <LocationInfo>{post.postLocation}</LocationInfo>
                        </LocationInfoDiv>
                    </FeedItem>
                ))}
            </FeedGrid>
            <PlusButton>
                <FeedPlusIcon />
            </PlusButton>
        </>
    );
}

const MoreImage = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const TabsList = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #F8F8F8;
`;

const Tab = styled.div<{ $isSelected: boolean }>`
    min-width: 48px;
    text-align: center;
    padding-bottom: 8px;
    border-bottom: ${({ $isSelected }) => ($isSelected ? "2px solid #71C9B0" : "none")};
    color: ${({ $isSelected }) => ($isSelected ? "#71C9B0" : "#606060")};
    cursor: pointer;
    font-weight: ${({ $isSelected }) => ($isSelected ? "500" : "300")};
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
    font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "400")};
    color: #606060;
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

const FeedImageContainer = styled.div`
    position: relative;
    width: 100%;

    img {
        min-height: 110px;
        max-height: 233px;
        border-radius: 10px;
        width: 100%;
    }
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

// const UserImage = styled.img`
//     width: 24px;
//     height: 24px;
//     border-radius: 50%;
// `;

const LocationInfoDiv = styled.div`
    margin-top: 4px;
    display: flex;
    gap: 5px;
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