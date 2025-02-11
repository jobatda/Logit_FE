import styled from "styled-components";

import TravelPlanCard from "./TravelPlanCard";
import testImg1 from "../../../assets/myPage/myPagePlanImg.png";

export interface TravelCardProps {
    image: string;
    state: string;
    location?: string;
    title: string;
    description: string;
    tag: string[];
    dateInfo?: string;
    joinDate?: string;
  }

  const travelPlans = [
    {
      image: testImg1,
      state: "당일여행",
      title: "대구 여행코스",
      description: "총 4개의 장소",
      tag: ["액티비티", "실내 여행지"],
      dateInfo: "2025.2.14",
    },
    {
      image: testImg1,
      state: "당일여행",
      title: "대구 여행코스",
      description: "총 4개의 장소",
      tag: ["액티비티", "실내 여행지"],
      dateInfo: "2025.2.14",
    },
    {
      image: testImg1,
      state: "당일여행",
      title: "대구 여행코스",
      description: "총 4개의 장소",
      tag: ["액티비티", "실내 여행지"],
      dateInfo: "2025.2.14",
    },
  ];

export default function PlanContent() {
    return (
        <PlanContentWrapper>
            {travelPlans.map((plan, index) => (
                <TravelPlanCard key={index} {...plan} />
            ))}
        </PlanContentWrapper>
    );
}

const PlanContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 16px;
`;