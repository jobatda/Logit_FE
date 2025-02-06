import styled from "styled-components"
import { useState, useEffect } from "react"
import PostItem from "./PostItem";
import { PostListType } from "../../types/Post"

// 더미 데이터
import { dummyPosts } from "../../temp_dummyData/dummy"


export default function PostList() {
    const [posts, setPosts] = useState<PostListType>();

    useEffect(() => {
        // axios.get("/api/posts") // API 호출
        // .then(response => {
        //   setPosts(response.data);
        // })
        // .catch(error => {
        //   console.error("Error fetching posts:", error);
        // });
        setPosts(dummyPosts);
    }, []);


    return (
        <PostContainer>
            {posts && posts.map((post) => (
                <PostItem key={post.id} id={post.id} />
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