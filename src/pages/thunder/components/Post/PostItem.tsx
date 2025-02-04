import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Post } from "../../types/Post";

export default function PostItem(props: Post) {
    const { image, title, totalPeople, currentPeople, days, travelDate, location } = props;
    const titleRef = useRef<HTMLParagraphElement>(null);

    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const date = dateString.split("-");
        return `${date[1]}월 ${date[2]}일`;
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
    }, [title]);

    return (
        <PostContainer>
            <PostImage src={image} alt="post" />
            <PostTitle ref={titleRef}>{title}</PostTitle>
            <PostMidleWrapper>
                <PersonIcon src="src/pages/thunder/temp_assets/icn_settings.png" />
                <PostPeople>
                    {currentPeople}명/{totalPeople}명
                </PostPeople>
                <PostDays>{days}박 {days + 1}일</PostDays>
            </PostMidleWrapper>
            <PostBottomWrapper>
                <PostDate>{formatDate(travelDate)}</PostDate>
                <PostBar src="src/pages/thunder/temp_assets/Rectangle 34648168.png" alt="" />
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
    font-weight: 400;
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
    font-weight: 600;
    color: #A1A1A1;
`;

const PostDays = styled.p`
    margin-left: 6px;
    font-size: 11px;
    line-height: 16px;
    font-weight: 400;
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
    font-weight: 400;
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