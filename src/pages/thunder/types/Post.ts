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

export type{ Post, PostProps };