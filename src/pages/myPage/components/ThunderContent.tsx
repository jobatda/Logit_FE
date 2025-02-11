import styled from "styled-components";

import TravelThunderCard from "./TravelThunderCard";
import testImg1 from "../../../assets/myPage/myPagePlanImg.png";

export interface TravelCardProps {
    image: string;
    state: string;
    title: string;
    startDate: string;
    endDate: string;
  }
  const travelThunders = [
    {
      image: testImg1,
      state: "참여완료",
      title: "[전북 무주]",
      startDate: "2025.2.14",
      endDate: "2025.2.15",
    },
    {
      image: testImg1,
      state: "참여완료",
      title: "[전북 무주] 자연과 힐링을 한 번에! 무주 1박 2일 여행",
      startDate: "2025.2.14",
      endDate: "2025.2.15",
    },
    {
      image: testImg1,
      state: "참여완료",
      title: "[전북 무주] 자연과 힐링을 한 번에! 무주 1박 2일 여행",
      startDate: "2025.2.14",
      endDate: "2025.2.15",
    },
  ];

export default function ThunderContent() {
    return (
        <ThunderContentWrapper>
            {travelThunders.map((plan, index) => (
                <TravelThunderCard key={index} {...plan} />
            ))}
        </ThunderContentWrapper>
    );
}

const ThunderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 16px;
`;