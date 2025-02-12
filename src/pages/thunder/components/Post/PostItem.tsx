import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostType } from "../../types/Post";
import axios from "axios";
import personIcon from '../../temp_assets/personIcon.png';
import betweenBar from '../../temp_assets/betweenBar.png';
// import { dummyPost } from "../../temp_dummyData/dummy" // 더미데이터 test

interface PostId {
    id: number;
}

export default function PostItem({id}: PostId) {
    const [post, setPost] = useState<PostType>();
    const titleRef = useRef<HTMLParagraphElement>(null);
    const navigate = useNavigate();

    // const getDayOfWeek = (date: Date): string => {
    //     const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    //     return daysOfWeek[date.getDay()];
    // };

    // const formatDate = (date: Date): { day: string, month: string} => {
    //     if (!date) return { day: "", month: "" };
    //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
    //     const day = date.getDate().toString().padStart(2, '0');
    //     return { day: day, month: month };
    // };

    // const truncateTitle = (title: string) => {
    //     if (!titleRef.current) return title;
    //     let truncatedTitle = title;
    //     while (titleRef.current.scrollHeight > 36 && truncatedTitle.length > 0) {
    //         truncatedTitle = truncatedTitle.slice(0, -1);
    //         titleRef.current.innerText = truncatedTitle + "...";
    //     }
    //     return truncatedTitle + "...";
    // };
    // const calculateDays = (startDate: string, endDate: string): { nights: number, days: number } => {
    //     const start = new Date(startDate);
    //     const end = new Date(endDate);
    //     const timeDiff = end.getTime() - start.getTime();
    //     const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //     const nights = days - 1;
    //     return { nights, days };
    // };

    const onClickToPostDetail = () => {
        navigate(`/thunder/${id}`);
    };

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
        // axios.get(`/api/posts/${id}`) // API 호출
        // setPost(dummyPost);
        // 위에서 데이터 못 받아오면 바로 return, 몇번 시도하도록 만들어야함
        if (!post) return;

        // if (titleRef.current) {
        //     titleRef.current.innerText = post.meetingTitle;
        //     truncateTitle(post.meetingTitle);
        // }
        // const date:Date = new Date(post.meetingStartDate);
        // const { month, day } = formatDate(date);
        // const dayOfWeek = getDayOfWeek(date);
        // setDateOutput({ month, day, dayOfWeek });
    }, []);

    if (!post) {return null;}

    // const { nights, days } = calculateDays(post.meetingStartDate, post.meetingEndDate);
    console.log(post.meetingContentImage[0]);

    const formatDateIntl = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("ko-KR", {month: "long", day: "numeric", weekday: "short"}).format(date);
    };

    const getStayDuration = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = end.getTime() - start.getTime();
        const days = diffTime / (1000 * 60 * 60 * 24);
        return `${days}박 ${days + 1}일`;
    };


    return (
        <PostContainer onClick={onClickToPostDetail}>
            <PostImage src={`data:image/png;base64,${post.meetingContentImage[0]}`} alt="post" />
            <PostTitle ref={titleRef}>{post.meetingTitle}</PostTitle>
            <PostMidleWrapper>
                <PersonIcon src={personIcon} alt=""/>
                <PostPeople>
                    {post.meetingNowCnt}명/{post.meetingMaxCnt}명
                </PostPeople>
                {/* <PostDays>{post.days}박 {post.days + 1}일</PostDays> */}
                <PostDays>{getStayDuration(post.meetingStartDate, post.meetingEndDate)}</PostDays>
            </PostMidleWrapper>
            <PostBottomWrapper>
                <PostDate>{formatDateIntl(post.meetingStartDate)}</PostDate>
                <PostBar src={betweenBar} alt="날짜 사이 바" />
                <PostLocation>{post.meetingLocation}</PostLocation>
            </PostBottomWrapper>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 172px;
    cursor: pointer;
`;

const PostImage = styled.img`
    width: 100%;
    max-width: 172px;
    max-height: 118px;
    height: auto;
    object-fit: cover;
`;

const PostTitle = styled.p`
    margin-top: 8px;
    width: 100%;
    font-size: 15px;
    line-height: 18px;
    font-family: 'Pretendard-Regular';
    color: #333333;
    word-break: break-all
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
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