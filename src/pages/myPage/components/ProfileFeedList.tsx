import styled from "styled-components";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FeedListType {
    postId: number,
    postContentImage: string
}

interface ProfileFeedListProps {
    userId: number,
};

export default function ProfileFeedList(props: ProfileFeedListProps) {
    const [feedList, setFeedList] = useState<FeedListType[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`https://travelgo.mooo.com/api//post/userLoginId/${props.userId}`);
              console.log(`${response.data}`);
              setFeedList(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        fetchData();
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
                    <FeedItem key={feed.postId}>
                        <img src={`data:image/png;base64,${feed.postContentImage}`} alt="피드 이미지" onClick={() => onClickFeed(`${feed.postId}`)} />
                        {/* <img src={`data:image/png;base64,${feed.postContentImage}`} alt="피드 이미지" onClick={() => onClickFeed(feed.postId)} /> */}
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