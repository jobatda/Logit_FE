// 게시물 타입
interface PostType {
    id: number; // 게시물 ID
    isAI: boolean // isAI is a boolean type 없어질 수도 있음
    thunderImage: string; // 이미지 URL
    title: string
    currentPeople: number; // 현재 인원수
    totalPeople: number; // 총원
    days: number; // 몇 박
    travelDate: string; // 여행 날짜
    location: string; // 여행 지역
}

// 게시물 리스트 타입
type PostListType = PostType[];  // interface를 type으로 변경하고 배열 타입으로 직접 선언

interface PostDetailType {
    id: number; // 게시물 ID
    image: string; // 이미지
    isRecruiting: boolean; // 모집 상태 여부
    title: string; // 제목
    location: string; // 여행 지역
    travelDate: string; // 여행 날짜
    days: number; // 몇 박
    currentPeople: number; // 현재 인원수
    totalPeople: number; // 총 인원수
    author: string; // 작성자
    authorImage: string; // 작성자 이미지
    authorId: number; // 작성자 ID
    members: string[]; // 멤버 이미지 URL
    content: string; // 내용
    // schedule: string; // 여행 일정 (임시로 이미지로 대체)
    scheduleImage: string; // 여행 일정 임시로 이미지로 대체 test
}

interface DateTravelType {
    day: string;
    month: string;
    dayOfWeek: string;
}

interface PostDetailInfoProp {
    image: string; // 이미지
    isRecruiting: boolean; // 모집 상태 여부
    title: string; // 제목
    location: string; // 여행 지역
    days: number; // 몇 박
    startDate: DateTravelType; // 여행 날짜 시작
    endDate: DateTravelType; // 여행 날짜 종료
    currentPeople: number; // 현재 인원수
    totalPeople: number; // 총 인원수
    author: string; // 작성자
    authorImage: string; // 작성자 이미지
    authorId: number; // 작성자 ID
    id: number; // 게시물 ID
    members: string[]; // 멤버 이미지 URL
    onClickToMemberCheck: function; // 멤버 확인 페이지로 이동
}

interface PostDetailContentProp {
    content: string; // 내용
    scheduleImage: string; // 여행 일정 이미지
}

export type{ 
    PostType,
    PostListType,
    DateTravelType, 
    PostDetailType, 
    PostDetailInfoProp, 
    PostDetailContentProp, 
};