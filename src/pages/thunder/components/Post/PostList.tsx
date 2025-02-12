import styled from "styled-components"
import { useState, useEffect } from "react"
import PostItem from "./PostItem";
import { PostListType } from "../../types/Post"
import axios from "axios"

export default function PostList() {
    const [posts, setPosts] = useState<PostListType>();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("https://travelgo.mooo.com/api/meeting");
              console.log(`${response.data}`);
              setPosts(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          fetchData();
    }, []);

    return (
        <PostContainer>
            {posts && posts.map((post) => (
                <PostItem key={post.meetingId} id={post.meetingId} />
            ))}
        </PostContainer>
    )
}

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 14px; /* 열 간격 */
    row-gap: 16px; /* 행 간격 */
    width: 100%;
    max-width: 358px;
    margin-top: 13px;
`;