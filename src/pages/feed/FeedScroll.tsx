import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Row from "../../styles/Common/Row.ts";
import Dot3Icon from "../../assets/feed/Dot3Icon.svg?react";
import SlideIcon from "../../assets/feed/SlideIcon.svg?react";
import RightArrowIcon from "../../assets/feed/RightArrowIcon.svg?react";
import LocationIcon from "../../assets/feed/LocationIcon.svg?react";
import Column from "../../styles/Common/Column.ts";
import {useEffect, useRef, useState} from "react";
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

export default function FeedScroll() {
    const [feeds, setFeeds] = useState<feedType[]>([]);
    const location = useLocation();
    const postId = location.state?.postId || 1;
    const feedRefs = useRef<Map<number, HTMLDivElement>>(new Map());

    useEffect(() => {
        const fetchFeeds = async () => {
            const result: feedType[] = await getFeeds('feed');
            setFeeds(result);
        }
        fetchFeeds();
    }, [])

    useEffect(() => {
        if (postId && feeds.length > 0) {
            const targetElement = feedRefs.current.get(postId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: "smooth", block: "center"});
            }
        }
    }, [postId, feeds]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 3); // 3일 추가
        return date.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    return (
        <Column $gap={30}>
            {feeds.map((post: any) => (
                <div key={post.postId} ref={(el) => el && feedRefs.current.set(post.postId, el)}
                     style={{width: "100%", position: "relative"}}>
                    <Row $horizonAlign="distribute" $verticalAlign="center" $gap={10}>
                        <UserDiv>
                            <UserImage src={`data:image/png;base64,${post.userImage}`}/>
                            <UserInfoDiv>
                                <UserInfo>{post.userLoginId}</UserInfo>
                                <FeedDate>{formatDate(post.postDate)}</FeedDate>
                            </UserInfoDiv>
                        </UserDiv>
                        <Row $gap={22} $verticalAlign="center">
                            <button>
                                <Dot3Icon/>
                            </button>
                        </Row>
                    </Row>
                    <ImageContainer>
                        {post.postContentImage.map((image: string, index: number) => (
                            <FeedScrollImage key={index} src={`data:image/png;base64,${image}`}/>
                        ))}
                    </ImageContainer>
                    <LocationInfoDiv>
                        <LocationIcon/>
                        <LocationInfo>{post.postLocation}</LocationInfo>
                    </LocationInfoDiv>
                    <FeedContent>
                        {post.postContent}
                    </FeedContent>
                </div>
            ))}
        </Column>
    );
}

const MoreImage = styled.div`
    position: absolute;
    transform: translateX(50%);
    right: 50%;
    bottom: 68px;
`;

const ImageContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 8px;
    scroll-snap-type: x mandatory;
    margin-top: 16px;
    -webkit-overflow-scrolling: touch;
    width: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const UserDiv = styled.div`
    display: flex;
    gap: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const UserInfoDiv = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const UserInfo = styled.div`
    font-size: 12px;
    color: #333333;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const FeedDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #A1A1A1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const FollowButton = styled.button`
    width: 40px;
    font-size: 15px;
    font-weight: 600;
    color: #71C9B0;
`;

const FeedScrollImage = styled.img`
    width: 100%;
    border-radius: 10px;
    scroll-snap-align: start;
    min-width: 100%;
    max-height: 348px;
`;

const LocationInfoDiv = styled.div`
    margin: 12px 0;
    display: flex;
    gap: 8px;
    align-items: center;
`;

const LocationInfo = styled.div`
    font-size: 14px;
    color: #333333;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const FeedContent = styled.div`
    color: #333333;
    font-size: 14px;
    font-weight: 300;
`;