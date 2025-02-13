import styled from "styled-components";

import testImg from "../../../assets/aiPlan/aiPlannerScheduleTest.png";


interface LocationType {
    name: string;
    address: string;
    category: string;
    imageUrl: string;
}

interface ScheduleType{
    scheduleId: number;
    scheduleDay: number;
    location: LocationType[];
}

interface ScheduleList {
    scheduleList: ScheduleType[];
}

const dummyScheduleList: ScheduleList = {
    scheduleList: [
      {
        scheduleId: 1,
        scheduleDay: 1,
        location: [
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
          {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
        ],
      },
      {
        scheduleId: 2,
        scheduleDay: 2,
        location: [
            {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
            {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
            {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
        ],
      },
      {
        scheduleId: 3,
        scheduleDay: 3,
        location: [
            {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
            {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
            {category: "여행지", name: "서울 타워", address: "서울의 랜드마크 gyfudaus dydaofh 788", imageUrl: testImg },
        ],
      },
    ],
  };

export default function PlannerScheduleList() {
    return (
        <PlannerScheduleListWrapper>
            {dummyScheduleList.scheduleList.map((schedule) => (
                <PlannerScheduleListContainer key={schedule.scheduleId}>
                    <PlannerHeaderWrapper>
                        <ScheduleDay>DAY {schedule.scheduleDay}</ScheduleDay>
                    </PlannerHeaderWrapper>
                    <ScheduleList>
                        {schedule.location.map((location, index) => (
                            <ScheduleItem key={index}>
                                <ScheduleNumber>{index + 1}</ScheduleNumber>
                                <ScheduleImg src={location.imageUrl}/>
                                <ScheduleInfoWrapper>
                                    <ScheduleCategory>{location.category}</ScheduleCategory>
                                    <ScheduleName>{location.name}</ScheduleName>
                                    <ScheduleAddress>{location.address}</ScheduleAddress>
                                </ScheduleInfoWrapper>
                            </ScheduleItem>
                        ))}
                    </ScheduleList>
                </PlannerScheduleListContainer>
            ))}
        </PlannerScheduleListWrapper>
    );
}

const PlannerScheduleListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const PlannerScheduleListContainer = styled.div`
`;

const PlannerHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`;

const ScheduleDay = styled.div`
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;
    color: #333333;
`;

const UpdateScheduleBtn = styled.button`
    font-size: 12px;
    line-geight: 18px;
    font-weight: 400;
    color: #606060;
`;

const ScheduleList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ScheduleItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;
    gap: 16px;
    border-bottom: 1px solid #F8F8F8;
`;

const ScheduleNumber = styled.div`
    border-radius: 50%;
    background-color: #F8F8F8;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: #606060;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    max-height: 20px;
`;

const ScheduleImg = styled.img`
    aspect-ratio: 1/1;
    object-fit: cover;
`;

const ScheduleInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 98px;
`;

const ScheduleCategory = styled.span`
    background-color: #71C9B0;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 11px;
    line-height: 16px;
    font-weight: 500;
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScheduleName = styled.div`
    margin-top: 6px;
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
    color: #333333;
`;

const ScheduleAddress = styled.div`
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
    color: #A1A1A1;
`;