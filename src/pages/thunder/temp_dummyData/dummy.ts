import { PostListType, PostType, PostDetailType, PostDetailMembersType } from "../types/Post";
import dummyPostImg from '../temp_assets/Frame 1707484749.png'; //test
import backgorundImage from '../temp_assets/detailBackgroundImage.png'; //test
import contentTrablePlane from '../temp_assets/trablePlaneTest.png'; //test
import authorProfileImg from '../temp_assets/authorProfileImg.png'; //test 

// PostList.tsx
export const dummyPosts:PostListType = [
    { id: 1, isAI: false, thunderImage: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" },
    { id: 2, isAI: false, thunderImage: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" },
    { id: 3, isAI: false, thunderImage: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" },
    { id: 4, isAI: false, thunderImage: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" },
    { id: 5, isAI: false, thunderImage: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" },
    { id: 6, isAI: true, thunderImage: dummyPostImg, title: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", currentPeople: 2, totalPeople: 4, days: 5, travelDate: "2023-11-15", location: "Maldives" },
    { id: 7, isAI: false, thunderImage: dummyPostImg, title: "Mountain Hiking", currentPeople: 5, totalPeople: 10, days: 3, travelDate: "2023-10-20", location: "Swiss Alps" },
    { id: 8, isAI: true, thunderImage: dummyPostImg, title: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", currentPeople: 2, totalPeople: 4, days: 5, travelDate: "2023-11-15", location: "Maldives" },
    { id: 9, isAI: false, thunderImage: dummyPostImg, title: "Mountain Hiking", currentPeople: 5, totalPeople: 10, days: 3, travelDate: "2023-10-20", location: "Swiss Alps" },
    { id: 10, isAI: true, thunderImage: dummyPostImg, title: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", currentPeople: 2, totalPeople: 4, days: 5, travelDate: "2023-11-15", location: "Maldives" },
    { id: 11, isAI: false, thunderImage: dummyPostImg, title: "Mountain Hiking", currentPeople: 5, totalPeople: 10, days: 3, travelDate: "2023-10-20", location: "Swiss Alps" },
    { id: 12, isAI: true, thunderImage: dummyPostImg, title: "City Tour", currentPeople: 1, totalPeople: 3, days: 2, travelDate: "2023-09-10", location: "New York" },
    { id: 13, isAI: false, thunderImage: dummyPostImg, title: "Desert Safari", currentPeople: 4, totalPeople: 6, days: 4, travelDate: "2023-08-05", location: "Dubai" }
];

// PostItem.tsx
export const dummyPost:PostType = { id: 1, isAI: false, thunderImage: dummyPostImg, title: "[전북 무주] 전북 겨울 여행 가실 분!", currentPeople: 3, totalPeople: 5, days: 7, travelDate: "2023-12-01", location: "전북 무주" };

// PostDetail.tsx
export const dummyPostDetail: PostDetailType = {
    id: 1,
    image: backgorundImage,
    isRecruiting: true,
    title: '[전북 무주] 전북 겨울 여행 가실분 무주 1박 2일 여행, 고고',
    location: 'Seoul, South Korea',
    travelDate: '2023-12-01',
    days: 40,
    currentPeople: 2,
    totalPeople: 10,
    author: 'John Doe',
    authorImage: authorProfileImg,
    authorId: 123,
    members:[authorProfileImg, authorProfileImg, authorProfileImg],
    content: '안녕하세여  .내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요. 내용을 입력하세요.',
    scheduleImage: contentTrablePlane, // 임시 로컬 이미지
};

// PostDetailMembers.tsx
export const dummyPostMembers: PostDetailMembersType = {
    id: 1,
    currentPeople: 2,
    totalPeople: 5,
    members: [
        { userId: 1, userImage: '', name: 'Alice', age: 25, sex: true, mbti: 'INTJ' },
        { userId: 2, userImage: '', name: 'Bob', age: 30, sex: false, mbti: 'ENTP' },
        { userId: 3, userImage: '', name: 'Charlie', age: 22, sex: true, mbti: 'INFJ' },
        { userId: 4, userImage: '', name: 'David', age: 28, sex: false, mbti: 'ENFP' },
        { userId: 5, userImage: '', name: 'Ev3e', age: 27, sex: true, mbti: 'ISTJ' },
        { userId: 6, userImage: '', name: 'E2ve', age: 47, sex: false, mbti: 'ISTJ' },
        { userId: 7, userImage: '', name: 'Eve5', age: 42, sex: false, mbti: 'ESTJ' },
        { userId: 8, userImage: '', name: 'Eve3', age: 12, sex: true, mbti: 'ISTJ' },
        { userId: 8, userImage: '', name: 'Eve3', age: 12, sex: false, mbti: 'ISTJ' },
    ]
};