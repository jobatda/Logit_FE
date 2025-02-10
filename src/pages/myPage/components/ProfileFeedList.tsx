import styled from "styled-components";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import testFeedImg1 from "../../../assets/myPage/profileFeddListTest1.png"; //test
import testFeedImg2 from "../../../assets/myPage/profileFeddListTest2.png"; //test
import testFeedImg3 from "../../../assets/myPage/profileFeddListTest3.png"; //test

interface FeedListType {
    feedId: string,
    feedImg: string,
}

interface ProfileFeedListProps {
    userId: number,
};

export default function ProfileFeedList(props: ProfileFeedListProps) {
    const [feedList, setFeedList] = useState<FeedListType[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        // backend api 호출
        const dummyFeedList = [
            {feedId: '1', feedImg: testFeedImg1},
            {feedId: '2', feedImg: testFeedImg2},
            {feedId: '3', feedImg: testFeedImg3},
            {feedId: '4', feedImg: testFeedImg2},
            {feedId: '5', feedImg: testFeedImg1},
            {feedId: '6', feedImg: testFeedImg3},
            {feedId: '7', feedImg: testFeedImg2},
        ];        
        setFeedList(dummyFeedList);

    }, [props.userId]);

    const onClickFeed = (id:string) => {
        navigate("/feed/scroll", {state: {feedId: id}});
    };

    return (
        <FeedListWrapper>
            {feedList.length === 0 ? (
            <NoFeedMessage>피드가 없습니다</NoFeedMessage>
        ) : (
            feedList.map((feed) => (
                    <FeedItem key={feed.feedId}>
                        <img src={feed.feedImg} alt="피드 이미지" onClick={() => onClickFeed(feed.feedId)} />
                    </FeedItem>
                ))
            )}
        </FeedListWrapper>
    );   
}

const FeedListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 레이아웃 */
    gap: 3px;
`;

const NoFeedMessage = styled.div`
    width: 100vw;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    color: #606060;
`;

const FeedItem = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    dsplay: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
`;