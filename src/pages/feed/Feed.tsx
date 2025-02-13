import styled from "styled-components";
import {useEffect, useState} from "react";
import SearchIcon from "../../assets/feed/SearchIcon.svg?react";
import LocationIcon from "../../assets/feed/LocationIcon.svg?react";
import PhotosIcon from "../../assets/feed/PhotosIcon.svg?react";
import FeedPlusIcon from "../../assets/feed/FeedPlusIcon.svg?react";
import {useNavigate} from "react-router-dom";
import getFeeds from "../../apis/feed/getFeeds.ts";

interface feedType {
    "userLoginId": string,
    "postId": number,
    "postTitle": string,
    "postContent": string,
    "postContentImage": string[],
    "userImage": string,
    "postDate": string,
    "postLocation": string,
    "postCategory": string,
    "postTravelNum": number
}

export default function Feed() {
    const navigate = useNavigate();
    const [selectedTab, _] = useState("feed");
    const [feeds, setFeeds] = useState<feedType[]>([]);
    const [search, setSearch] = useState<string>("");
    const [filteredFeeds, setFilteredFeeds] = useState<feedType[]>([]);

    useEffect(() => {
        const fetchFeeds = async () => {
            const result: feedType[] = await getFeeds(selectedTab);
            setFilteredFeeds([...result]);
            setFeeds([...result]);
        }
        fetchFeeds();
    }, [])

    useEffect(() => {
        if (!search) {
            setFilteredFeeds(feeds);
        } else {
            const filtered = feeds.filter(post =>
                post.postLocation.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredFeeds(filtered);
        }
    }, [search]);

    return (
        <>
            <TabsList>
                <Tab $isSelected={true}>
                    피드
                </Tab>
            </TabsList>
            <SearchInputDiv>
                <SearchIcon color="#606060"/>
                <SearchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </SearchInputDiv>
            <FeedGrid>
                {filteredFeeds.map((post: feedType) => (
                    <FeedItem key={post.postId}
                              onClick={() => navigate("/feed/scroll", {state: {postId: post.postId}})}>
                        <FeedImageContainer>
                            {post.postContentImage.length > 1 && (
                                <MoreImage>
                                    <PhotosIcon/>
                                </MoreImage>
                            )}
                            <img src={`data:image/png;base64,${post.postContentImage[0]}`} alt=""/>
                        </FeedImageContainer>
                        <UserInfoDiv>
                            <UserImage src={`data:image/png;base64,${post.userImage}`}/>
                            <UserInfo>{post.userLoginId}</UserInfo>
                        </UserInfoDiv>
                        <LocationInfoDiv>
                            <LocationIcon/>
                            <LocationInfo>{post.postLocation}</LocationInfo>
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
    border-bottom: ${({$isSelected}) => ($isSelected ? "2px solid #71C9B0" : "none")};
    color: ${({$isSelected}) => ($isSelected ? "#71C9B0" : "#606060")};
    cursor: pointer;
    font-weight: ${({$isSelected}) => ($isSelected ? "500" : "300")};
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
    width: 100%;
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

const UserImage = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

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