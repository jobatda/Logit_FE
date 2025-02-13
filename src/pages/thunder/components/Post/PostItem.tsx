import {useRef, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {PostType} from "../../types/Post";
import axios from "axios";
import personIcon from '../../temp_assets/personIcon.png';
import betweenBar from '../../temp_assets/betweenBar.png';

interface PostId {
    id: number;
}

export default function PostItem({id}: PostId) {
    const [post, setPost] = useState<PostType>();
    const titleRef = useRef<HTMLParagraphElement>(null);
    const navigate = useNavigate();

    const truncateTitle = (title: string) => {
        if (!titleRef.current) return title;
        let truncatedTitle = title;
        while (titleRef.current.scrollHeight > 36 && truncatedTitle.length > 0) {
            truncatedTitle = truncatedTitle.slice(0, -1);
            titleRef.current.innerText = truncatedTitle + "...";
        }
        return truncatedTitle + "...";
    };

    const onClickToPostDetail = () => {
        navigate(`/thunder/${id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://travelgo.mooo.com/api/meeting/meetingId/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        if (!post) return;

        if (titleRef.current) {
            titleRef.current.innerText = post.meetingTitle;
            truncateTitle(post.meetingTitle);
        }
    }, []);

    if (!post) {
        return null;
    }

    const formatDateIntl = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("ko-KR", {month: "long", day: "numeric", weekday: "short"}).format(date);
    };

    const getStayDuration = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = end.getTime() - start.getTime();
        const days = diffTime / (1000 * 60 * 60 * 24);
        if (days === 0) return "당일치기";
        return `${days}박 ${days + 1}일`;
    };

    return (
        <PostContainer onClick={onClickToPostDetail}>
            <PostImage src={`data:image/png;base64,${post.meetingContentImage[0]}`} alt="post"/>
            <PostTitle ref={titleRef}>{post.meetingTitle}</PostTitle>
            <PostMidleWrapper>
                <PersonIcon src={personIcon} alt=""/>
                <PostPeople>
                    {post.meetingNowCnt}명/{post.meetingMaxCnt}명
                </PostPeople>
                <PostDays>{getStayDuration(post.meetingStartDate, post.meetingEndDate)}</PostDays>
            </PostMidleWrapper>
            <PostBottomWrapper>
                <PostDate>{formatDateIntl(post.meetingStartDate)}</PostDate>
                <PostBar src={betweenBar} alt="날짜 사이 바"/>
                <PostLocation>{post.meetingLocation}</PostLocation>
            </PostBottomWrapper>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    // max-width: 172px;
    width: 100%;
    cursor: pointer;
`;

const PostImage = styled.img`
    width: 100%;
    // max-width: 172px;
    // max-height: 118px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
`;

const PostTitle = styled.p`
    margin-top: 8px;
    width: 100%;
    max-width: 100%;
    font-size: 15px;
    line-height: 18px;
    font-family: 'Pretendard-Regular';
    color: #333333;
    word-break: break-all
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // flex: 1;
`;

const PostMidleWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

const PersonIcon = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 1px;
`;

const PostPeople = styled.p`
    font-size: 12px;
    line-height: 17px;
    font-family: 'Pretendard-SeimBold';
    color: #A1A1A1;
`;

const PostDays = styled.p`
    margin-left: 6px;
    font-size: 11px;
    line-height: 16px;
    font-family: 'Pretendard-Regular';
    color: #606060;
    padding: 0px 7.5px;
    background-color: #F8F8F8;
    border-radius: 13px;
`;

const PostBottomWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 12px;
    line-height: 17px;
    font-family: 'Pretendard-Regular';
    color: #A1A1A1;
`;

const PostDate = styled.p`
    margin-right: 5px;
`;

const PostBar = styled.img`
`;

const PostLocation = styled.p`
    margin-left: 5px;
`;