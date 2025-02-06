import { useRef, useEffect,useState } from "react";
import styled from "styled-components";
import { Post, DateTravelType } from "../../types/Post";

import personIcon from '../../temp_assets/personIcon.png';
import betweenBar from '../../temp_assets/betweenBar.png';

interface PostItemProps extends Post {
    onClick: () => void;
}

export default function PostItem(props: PostItemProps) {
    const { image, title, totalPeople, currentPeople, days, travelDate, location, onClick } = props;
    const [dateOutput, setDateOutput] = useState<DateTravelType>({ month: "", day: "", dayOfWeek: "" });
    const titleRef = useRef<HTMLParagraphElement>(null);

    const getDayOfWeek = (date: Date): string => {
        const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        return daysOfWeek[date.getDay()];
    };

    const formatDate = (date: Date): { day: string, month: string} => {
        if (!date) return { day: "", month: "" };
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return { day: day, month: month };
    };

    const truncateTitle = (title: string) => {
        if (!titleRef.current) return title;
        let truncatedTitle = title;
        while (titleRef.current.scrollHeight > 36 && truncatedTitle.length > 0) {
            truncatedTitle = truncatedTitle.slice(0, -1);
            titleRef.current.innerText = truncatedTitle + "...";
        }
        return truncatedTitle + "...";
    };

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.innerText = title;
            truncateTitle(title);
        }
        const date:Date = new Date(travelDate);
        const { month, day } = formatDate(date);
        const dayOfWeek = getDayOfWeek(date);
        setDateOutput({ month, day, dayOfWeek });
    }, [title]);

    return (
        <PostContainer onClick={onClick}>
            <PostImage src={image} alt="post" />
            <PostTitle ref={titleRef}>{title}</PostTitle>
            <PostMidleWrapper>
                <PersonIcon src={personIcon} alt=""/>
                <PostPeople>
                    {currentPeople}명/{totalPeople}명
                </PostPeople>
                <PostDays>{days}박 {days + 1}일</PostDays>
            </PostMidleWrapper>
            <PostBottomWrapper>
                <PostDate>{dateOutput["month"]}월 {dateOutput["day"]}일 ({dateOutput["dayOfWeek"]})</PostDate>
                <PostBar src={betweenBar} alt="날짜 사이 바" />
                <PostLocation>{location}</PostLocation>
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
    word-break: break-all;
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