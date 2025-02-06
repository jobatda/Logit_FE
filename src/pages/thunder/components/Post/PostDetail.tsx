import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "pretendard/dist/web/static/pretendard.css"

import backgorundImage from '../../temp_assets/detailBackgroundImage.png'; //test
import contentTrablePlane from '../../temp_assets/trablePlaneTest.png'; //test
import authorProfileImg from '../../temp_assets/authorProfileImg.png'; //test 


// 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요.

import PostDetailFooter from './PostDetailFooter';
import PostDetailInfo from './PostDetailInfo';
import PostDetailContent from './PostDetailContent';

import { PostDetailType, PostDetailInfoProp, DateTravelType } from '../../types/Post';

export default function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostDetailType | null>(null);
    const [dateOutput, setDateOutput] = useState<DateTravelType>({ month: "", day: "", dayOfWeek: "" });
    const [endDateOutput, setEndDateOutput] = useState<DateTravelType>({ month: "", day: "", dayOfWeek: "" });

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

    useEffect(() => {

        // backend에서 API로 데이터 받아오기
        // axios.get(`/api/posts/${id}`)
        //     .then(response => {
        //         setPost(response.data);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching post:", error);
        //     });

        // test data
        const dummyPost: PostDetailType = {
            id: 1,
            image: backgorundImage,
            title: '[전북 무주] 전북 겨울 여행 가실분',
            currentPeople: 2,
            totalPeople: 10,
            days: 40,
            travelDate: '2023-12-01',
            location: 'Seoul, South Korea',
            author: 'John Doe',
            authorImage: authorProfileImg,
            authorId: 123,
            content: '안녕하세여  .내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요.',
            scheduleImage: contentTrablePlane,
            isRecruiting: true,
        };

        setPost(dummyPost);
        const startDate:Date = new Date(dummyPost.travelDate);
        const endDate:Date = new Date(startDate);
        endDate.setDate(startDate.getDate() + dummyPost.days);
        const { month, day } = formatDate(startDate);
        const dayOfWeek = getDayOfWeek(startDate);
        setDateOutput({ month, day, dayOfWeek });
        const { month: endMonth, day: endDay } = formatDate(endDate);
        const endDayOfWeek = getDayOfWeek(endDate);
        setEndDateOutput({ month: endMonth, day: endDay, dayOfWeek: endDayOfWeek });
    }, [id]);
    if (!post) {
        return <div>Loading...</div>;
    }

    // test data
    const postDetailInfoProps: PostDetailInfoProp = {
        image: post.image,
        isRecruiting: post.isRecruiting,
        title: post.title,
        location: post.location,
        days: post.days,
        startDate: dateOutput,
        endDate: endDateOutput,
        currentPeople: post.currentPeople,
        totalPeople: post.totalPeople,
        author: post.author,
        authorImage: post.authorImage,
        authorId: post.authorId,
        id: post.id,
        members:[authorProfileImg, authorProfileImg, authorProfileImg],
    };


    return (
        <PostDetailContainer>
            <PostDetailInfo {...postDetailInfoProps} />
            <LineBar />
            <PostDetailContent content={post.content} scheduleImage={post.scheduleImage} />
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

const LineBar = styled.div`
    width: 100%;
    height: 8px;
    background-color: #F8F8F8;
`;

// width: 100%;
// min-height: 100vh;
// background-color: #FFFFFF;
// position: relative;
