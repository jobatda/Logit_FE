import {PostDetailType } from "../types/Post";
import backgorundImage from '../temp_assets/detailBackgroundImage.png'; //test
import contentTrablePlane from '../temp_assets/trablePlaneTest.png'; //test
import authorProfileImg from '../temp_assets/authorProfileImg.png'; //test 

// PostList.tsx
// PostDetail.tsx
export const dummyPostDetail: PostDetailType = {
    id: 1,
    image: backgorundImage,
    isRecruiting: true,
    title: '[전북 무주] 전북 겨울 여행 가실분 무주 1박 2일 여행, sdfdsfmsdklfmsdklfmdsklmflsdmlfk고고',
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

interface MemberType {
    userId: number,
    userImage: string,
    name: string,
    age: number,
    sex: boolean,
    mbti: string
}

interface PostDetailMembersType {
    id: number,
    currentPeople: number,
    totalPeople: number,
    members: MemberType[]
}
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
        { userId: 9, userImage: '', name: 'Eve3', age: 12, sex: false, mbti: 'ISTJ' },
    ]
};