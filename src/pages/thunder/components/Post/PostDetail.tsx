import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import backgorundImage from '../../temp_assets/detailBackgroundImage.png';
import locationIcon from '../../temp_assets/ic_round-place.png';
import dateIcon from '../../temp_assets/mingcute_time-line.png';
import memberIcon from '../../temp_assets/fluent_people-24-regular.png';
import memberImgMini from '../../temp_assets/memberImageMini.png';
import memberDetailBtn from '../../temp_assets/memberDetailBtn.png';
import authorProfileImg from '../../temp_assets/authorProfileImg.png'; //test
import contentTrablePlane from '../../temp_assets/contentTrablePlane.png'; //test

import PostDetailFooter from './PostDetailFooter';

import { PostDetailType } from '../../types/Post';

interface DateOutputType {
    day: string;
    month: string;
    dayOfWeek: string;
}


export default function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostDetailType | null>(null);
    const [dateOutput, setDateOutput] = useState<DateOutputType>({ month: "", day: "", dayOfWeek: "" });
    const [endDateOutput, setEndDateOutput] = useState<DateOutputType>({ month: "", day: "", dayOfWeek: "" });

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
        const dummyPost: PostDetailType = {
            id: 1,
            image: backgorundImage,
            title: '[전북 무주] 전북 겨울 여행 가실분',
            currentPeople: 5,
            totalPeople: 10,
            days: 3,
            travelDate: '2023-12-01',
            location: 'Seoul, South Korea',
            author: 'John Doe',
            authorImage: 'src/pages/thunder/temp_assets/authorImage.png',
            authorId: 123,
            content: 'This is a sample post content.',
            scheduleImage: 'https://example.com/schedule.jpg',
            isRecruiting: true,
            // members: [사진 추가]/ ㅇ부족하면 기본 사진 세팅
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


    return (
        <PostDetailContainer>
            <DetailTopWrapper>
                <ImageBannerWrapper>
                    {/* 이미지 배너공간 */}
                    <div>
                    </div>
                    <div></div>
                    <DetailImage src={post.image} />
                    {/* <img src={post.image} alt="" /> */}
                </ImageBannerWrapper>
                <DetailInfoWrapper>
                    {/* 번개 info 공간 */}
                        {/* 상단 제목 */}
                        <DetailIsRecruiting>
                            모집중
                        </DetailIsRecruiting>
                        <DetailTitle>
                            {post.title}
                        </DetailTitle>
                    <DetailInfo>
                        <InfoLocation>
                            <InfoLocationIcon src={locationIcon} />
                            전북 무주
                        </InfoLocation>
                        <InfoDateWrapper>
                            <InfoDateIcon src={dateIcon} />
                            <InfoDate>
                                {dateOutput["month"]}월 {dateOutput["day"]}일 ({dateOutput["dayOfWeek"]}) ~ {endDateOutput["month"]}월 {endDateOutput["day"]}일 ({endDateOutput["dayOfWeek"]})
                            </InfoDate>
                            <InfoDateDuration>{post.days}박 {post.days + 1}일</InfoDateDuration>
                        </InfoDateWrapper>
                        <InfoMemberWrapper>
                            <InfoMemberSituation>
                                <InfoMemberIcon src={memberIcon} alt='멤버 아이콘'/>확정 멤버
                                &nbsp;<HilightCurrentMember>4명</HilightCurrentMember>
                                &nbsp;/ 6명
                            </InfoMemberSituation>
                            <InfoMemberDetailBtn>
                                <MemberDetailArray>
                                    <MemberImgMini src={memberImgMini} alt='멤버 이미지' />
                                    <MemberImgMini src={memberImgMini} alt='멤버 이미지' />
                                    <MemberImgMini src={memberImgMini} alt='멤버 이미지' />
                                </MemberDetailArray>
                                <MemberDetailBtn src={memberDetailBtn} alt='멤버 현황 버튼'/>
                            </InfoMemberDetailBtn>
                        </InfoMemberWrapper>
                    </DetailInfo>
                    <AuthorWrapper>
                        <AuthorProfileImg src={authorProfileImg} alt='작성자 프로필 이미지' />
                        <AuthorName>{post.author}</AuthorName>
                    </AuthorWrapper>
                </DetailInfoWrapper>
            </DetailTopWrapper>
            {/* 번개 content 공간 */}
            <DetailContentWrapper>
                <DetailContent>
                    내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요.
                </DetailContent>
                <ContentTrablePlane src={contentTrablePlane} alt='여행 계획 이미지'/>
            </DetailContentWrapper>
            <PostDetailFooter />
        </PostDetailContainer>
    );
}

const PostDetailContainer = styled.div`
    background-color: #111111;
    background-color: #F8F8F8;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px; // footer height
`;

const DetailTopWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 542px;
    max-width: 390px;
    // overflow: hidden;
`;

const ImageBannerWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 390px;
    max-height: 226px;
    position: relative;
    z-index: 1;
`;

const DetailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const DetailInfoWrapper = styled.div`
    position: absolute;
    // bottom: -31px;
    bottom: 0;
    left: 0;
    padding: 25px 32px 18px 32px;
    width: 100%;
    border-radius: 16px 16px 0 0; /* 상단 모서리를 둥글게 */
    background-color: #ffffff;
    z-index: 2;
`;


const DetailIsRecruiting = styled.div`
    color: #71C9B0;
    font-size: 15px;
    font-weight: 700; // bold
    letter-spacing: 1px; // 글자간격 추가
`;

const DetailTitle = styled.div`
    margin-top: 18px;
    font-size: 18px;
    line-height: 17px;
    font-weight: 700; // bold
    color: #333333;
`;

const DetailInfo= styled.div`
    border-top: 1px solid #F8F8F8;
    border-bottom: 1px solid #F8F8F8;
    margin-top: 25px;
    padding: 22px 0;
    height: 140px; // test
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
`;

const InfoLocation = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    line-height: 17px;
    font-weight: 400; // regular
    color: #A1A1A1;

`;

const InfoLocationIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const InfoDateWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
`;

const InfoDateIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const InfoDate = styled.div`
    font-size: 15px;
    line-height: 17px;
    font-weight: 400; // regular
    color: #A1A1A1;
`;

const InfoDateDuration = styled.div`
    border-radius: 13px;
    background-color: #F8F8F8;
    color: #606060;
    font-size: 13px;
    line-height: 17px;
    font-weight: 400; // regular
    padding: 3.5px 9.5px;
`;

const InfoMemberWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InfoMemberIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const InfoMemberSituation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 17px;
    font-weight: 400; // regular
    color: #A1A1A1;
`;

const HilightCurrentMember = styled.span`
    font-weight: 700; // bold
    color: #71C9B0;
`;

const InfoMemberDetailBtn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

const MemberDetailArray = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MemberImgMini = styled.img`
    width: 100%;
    height: 100%;
    max-width: 24px;
    max-height: 24px;
    object-fit: cover;
    margin-right: -8px;
`;

const MemberDetailBtn = styled.img`
    margin-left: 8px;
`;

const AuthorWrapper = styled.div`
    padding: 20px 0 16px 26px;
    display: flex;  
    justify-content: start;
    align-items: center;
    gap: 25px;
    background-color: #F8F8F8;
    border-radius: 10px;
    margin-top: 14px;
    cursor: pointer;
`;

const AuthorProfileImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 48px;
    max-height: 48px;
    object-fit: cover;
`;

const AuthorName = styled.div`
    fonst-size: 15px;
    line-height: 17px;
    font-weight: 600; // bold
    color: #333333;
`;

const DetailContentWrapper = styled.div`
    margin-top: 8px;
    width: 100%;
    height: 100%;
    padding: 43px 32px 0 32px;
    background-color: #ffffff;
`;

const DetailContent = styled.div`
    font-size: 13px;
    line-height: 18px;
    font-weight: 300; // regular
    color: #333333;
`;

const ContentTrablePlane = styled.img`
    margin-top: 51px;
    width:100%;
    height:100%;
    object-fit: cover;
`;