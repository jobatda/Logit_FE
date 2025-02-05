interface Post {
    id: number; // 게시물 ID
    isAI: boolean // isAI is a boolean type 없어질 수도 있음
    image: string; // 이미지 URL
    title: string
    currentPeople: number; // 현재 인원수
    totalPeople: number; // 총원
    days: number; // 몇 박
    travelDate: string; // 여행 날짜
    location: string; // 여행 지역
}

interface PostProps {
    posts: Post[]
    onPostClick: (postId: number) => void;
}

interface PostDetailType {
    id: number; // 게시물 ID
    image: string; // 이미지
    title: string; // 제목
    currentPeople: number; // 현재 인원수
    totalPeople: number; // 총 인원수
    days: number; // 몇 박
    travelDate: string; // 여행 날짜
    location: string; // 여행 지역
    author: string; // 작성자
    authorImage: string; // 작성자 이미지
    authorId: number; // 작성자 ID
    content: string; // 내용
    // schedule: string; // 여행 일정
    scheduleImage: string; // 여행 일정 임시로 이미지로 대체
    isRecruiting: boolean; // 모집 상태 여부
}

export type{ Post, PostProps, PostDetailType };