import styled from "styled-components"
import {useState, useEffect} from "react"
import PostItem from "./PostItem";
import {PostListType} from "../../types/Post"
import axios from "axios"

export default function PostList({searchQuery}: { searchQuery: string }) {
    const [posts, setPosts] = useState<PostListType>([]);
    const [filteredPosts, setFilteredPosts] = useState<PostListType>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://travelgo.mooo.com/api/meeting");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!searchQuery) {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post =>
                post.meetingTitle.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [searchQuery, posts]);

    return (
        <>
            {filteredPosts.length ?
                <PostContainer>
                    {filteredPosts.map((post) => (
                        <PostItem key={post.meetingId} id={post.meetingId}/>
                    ))}
                </PostContainer>
                :
                <PostNo>검색된 번개가 없습니다</PostNo>
            }
        </>
    );
}

const PostNo = styled.div`
    color: #606060;
    font-size: 13px;
    font-weight: 400;
    margin-top: 130px;
`;

const PostContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 14px; /* 열 간격 */
    row-gap: 16px; /* 행 간격 */
    width: 100%;
    max-width: 358px;
    margin-top: 13px;
`;