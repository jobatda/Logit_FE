import styled from "styled-components"
import PostItem from "./PostItem";
import { PostProps } from "../../types/Post"

export default function PostList(props: PostProps) {
    const { posts, onPostClick } = props;

    return (
        <PostContainer>
            {posts.map((post) => (
                <PostItem key={post.id} {...post} onClick={() => onPostClick(post.id)} />
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