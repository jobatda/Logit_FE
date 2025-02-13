import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { useTravelPlanner } from "../context/TravelPlannerContext";
import {useEffect, useState} from "react";
import axios from "axios";

import goHomeIcon from "../../../assets/aiPlan/aiPlanGoHome.svg";
import ticketImg from "../../../assets/aiPlan/aiPlannerTheme.png";
import textBar from "../../../assets/aiPlan/aiPlannerBar.svg";
import PlannerScheduleList from "./PlannerScheduleList";

// type Place = {
//     장소명: string; // 장소 이름
//     주소: string;
//     imgUrl?: string; // 이미지 URL (선택적 속성)
//   };
  
//   type TravelPlan = {
//     [key: `Day ${number}`]: Place[]; // "Day 1", "Day 2", "Day 3"와 같은 키
//   };

// type PlannerScheduleListProps = {
//     travelPlan: TravelPlan; // 여행 일정 데이터를 전달받음
// };

const dummyDataUser = {
    userName: "이동학",
    userRegion: "대구",
    userDistance: "100km",
    userTravelTag: ["당일 치기", "액티비티", "실내 여행지"],
}

export default function AiPlanner({courseid}: {courseid: string}) {
    const {data} = useTravelPlanner();
    const navigate = useNavigate();
    // const [posts, setPosts] = useState<PlannerScheduleListProps | null>(null);

    const onClickGoHome = () => {
        navigate("/");
    };

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //       const response = await axios.get("https://travelgo.mooo.com/api/meeting");
        //       console.log(`${response.data}`);
        //       setPosts(response.data);
        //     } catch (error) {
        //       console.error("Error fetching data:", error);
        //     }
        //   };
        //   fetchData();
    }, []);


    return (
        <AiPlannerWrapper>
            <AiPlannerHeader>
                <GoHomeBtn src={goHomeIcon} onClick={onClickGoHome}/>
                <HeaderText>
                    AI 플래너
                </HeaderText>
            </AiPlannerHeader>
            <AiPlannerInfoWrapper>
                <InfoTicketImg src={ticketImg}/>
                <InfoWrapper>
                    <div>
                        <InfoTitleWrapper>
                            <InfoTitle>
                                {dummyDataUser.userName}이름님을 위한 지역
                            </InfoTitle>
                            &nbsp;여행코스
                        </InfoTitleWrapper>
                        <InfoDescription>
                            총 4개 여행지 / 음식점 추천
                        </InfoDescription>
                    </div>
                    <InfoTagWrapper>
                        {dummyDataUser.userTravelTag.map((tag, index) => (
                            <InfoTag key={index}># {tag}</InfoTag>
                        ))}
                    </InfoTagWrapper>
                </InfoWrapper>
            </AiPlannerInfoWrapper>
            <AiPlannerContentWrapper>
                <PlannerScheduleList courseid={courseid}/>
            </AiPlannerContentWrapper>
            <AiPlannerButton onClick={()=>navigate("/thunder/create")}>
                번개 만들기
            </AiPlannerButton>
        </AiPlannerWrapper>
    );
}

const AiPlannerButton = styled.button`
    border-radius: 8px;
    background-color: #71C9B0;
    color: white;
    padding: 10px 0;
    font-size: 13px;
    font-weight: 400;
    width: 100%;
    justify-content: center;
    margin-top: 42px;
`;

const AiPlannerWrapper = styled.div`
`;

const AiPlannerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    height: 32px;
    margin-top: 16px;
`;

const GoHomeBtn = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
    object-fit: cover;
`;

const HeaderText = styled.div`
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    color: #333333;
`;

const AiPlannerInfoWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 11px;
    width: 100%;
    height: 100%;
    backgorund-color: #111111;

`;

const InfoTicketImg = styled.img`
    width: 100%;
    object-fit: cover;
`;

const InfoWrapper = styled.div`
    padding: 0 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`;

const InfoTitleWrapper = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #333333;
`;

const InfoTitle = styled.span`
    font-weight: 700;
`;

const InfoDescription = styled.div`
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
    color: #606060;
`;

const InfoMiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 12px;
    line-height: 17px;
    font-weight: 600;
    letter-spacing: 0px;
    color: #606060;
`;

const TotalMiddleContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;
const TotalMiddleContent = styled.span`
    font-weight: 400;
`;


const InfoTagWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    max-width: 230px;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const InfoTag = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: #606060;
    background-color: #F8F8F8;
    height: 23px;
    padding: 0 8px;
    border-radius: 10px;
    white-space: nowrap;

`;

const AiPlannerContentWrapper = styled.div`
    margin-top: 24px;
    width: 100%;
`;