import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import PostDetailFooter from './PostDetailFooter';
import PostDetailInfo from './PostDetailInfo';
import PostDetailContent from './PostDetailContent';

import { PostType} from '../../types/Post';

export default function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostType | null>(null);
    const navigate = useNavigate();

    const onClickToMemberCheck = () => {navigate(`/thunder/${id}/members`)};

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`https://travelgo.mooo.com/api/meeting/meetingId/${id}`);
              console.log(`${response.data}`);
              setPost(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        fetchData();
        if (!post) return;
    }, []);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <PostDetailContainer>
            <PostDetailInfo post={post} handleOnClick={onClickToMemberCheck}/>
            {/* <LineBar />
            <PostDetailContent content={post.meetingContent} scheduleImage={post.meetingContentImage[0]} /> 
                    postDetail의 내용과 밑에 들어갈 플랜 을 넣어줘야함
            */}
            <PostDetailContent content={post.meetingContent} scheduleImage={`data:image/png;base64,${post.meetingContentImage[0]}`} />
            <PostDetailFooter />
        </PostDetailContainer>
    );
}

const PostDetailContainer = styled.div`
    background-color: #FFFFFF;
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px; // footer height
`;

// const LineBar = styled.div`
//     width: 100%;
//     height: 8px;
//     background-color: #F8F8F8;
// `;
