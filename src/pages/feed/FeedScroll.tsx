import {useLocation} from "react-router-dom";
import test1 from "../../assets/feed/test1.png";
import test2 from "../../assets/feed/test2.png";
import test3 from "../../assets/feed/test3.png";
import styled from "styled-components";
import Row from "../../styles/Common/Row.ts";
import Dot3Icon from "../../assets/feed/Dot3Icon.svg?react";
import RightArrowIcon from "../../assets/feed/RightArrowIcon.svg?react";
import LocationIcon from "../../assets/feed/LocationIcon.svg?react";
import Column from "../../styles/Common/Column.ts";

const posts = [
    {
        id: 1,
        user: "안농 12asdasdadsadsadasdasdsadassaasdasadsads3",
        location: "전북 무asdasdasaasdasdsdasdadsadsasd주",
        img: test1,
        content: "대둔산 경치 좋네",
        date: "25년 2월 16일",
    },
    {
        id: 2,
        user: "안농 123",
        location: "전북 무주",
        img: test2,
        content: "대둔산 경치 좋네",
        date: "25년 2월 16일",
    },
    {
        id: 3,
        user: "안농 123",
        location: "전북 무주",
        img: test3,
        content: "대둔산 경치 좋네",
        date: "25년 2월 16일",
    },
    {
        id: 4,
        user: "안농 123",
        location: "전북 무주",
        img: test2,
        content: "대둔산 경치 좋네",
        date: "25년 2월 16일",
    },
    {
        id: 5,
        user: "안농 123",
        location: "전북 무주",
        img: test3,
        content: "대둔산 경치 좋네",
        date: "25년 2월 16일",
    },
];

export default function FeedScroll() {
    const location = useLocation();
    const {feedId} = location.state;

    return (
        <Column $gap={30}>
            {posts.map((post) => (
                <div key={post.id} style={{width:"100%"}}>
                    <Row $horizonAlign="distribute" $verticalAlign="center" $gap={10} >
                        <UserDiv >
                            <UserImage src={post.img}/>
                            <UserInfoDiv>
                                <UserInfo>{post.user}</UserInfo>
                                <FeedDate>{post.date}</FeedDate>
                            </UserInfoDiv>
                        </UserDiv>
                        <Row $gap={22} $verticalAlign="center" >
                            <FollowButton>
                                팔로우
                            </FollowButton>
                            <button>
                                <Dot3Icon/>
                            </button>
                        </Row>
                    </Row>
                    <FeedScrollImage src={post.img}/>
                    <LocationInfoDiv>
                        <LocationIcon/>
                        <LocationInfo>{post.location}</LocationInfo>
                        <RightArrowIcon/>
                    </LocationInfoDiv>
                    <FeedContent>
                        {post.content}
                    </FeedContent>
                </div>
            ))}
        </Column>
    );
}

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
    margin-top: 16px;
    width: 100%;
    border-radius: 10px;
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