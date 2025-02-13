import styled from "styled-components";
import { useTravelPlanner } from "../context/TravelPlannerContext";
import PageNavigation from "./PageNavigation";

import todayBeforeIcon from "../../../assets/aiPlan/durationTodayBefore.svg";
import todayAfterIcon from "../../../assets/aiPlan/durationTodayAfter.svg";
import oneDayBeforeIcon from "../../../assets/aiPlan/durationOneDayBefore.svg";
import oneDayAfterIcon from "../../../assets/aiPlan/durationOneDayAfter.svg";
import twoDayBeforeIcon from "../../../assets/aiPlan/durationTwoDayBefore.svg";
import twoDayAfterIcon from "../../../assets/aiPlan/durationTwoDayAfter.svg";

const durations = [
    {data: "당일치기", beforeIcon: todayBeforeIcon, afterIcon: todayAfterIcon},
    {data: "1박 2일", beforeIcon: oneDayBeforeIcon, afterIcon: oneDayAfterIcon},
    {data: "2박 3일", beforeIcon: twoDayBeforeIcon, afterIcon: twoDayAfterIcon},
];

export default function DurationSelection({ onNext, onPrevious, region }: { onNext: () => void; onPrevious: () => void; region: {region: string} }) {
  const { setDuration, setRegion ,data } = useTravelPlanner();

    const handleNextClick = () => {
        if (data.duration && region.region) {
            onNext();
        } else {
        }
    };

    const handlePrevClick = () => {
        onPrevious();
    };

  const handleDurationClick = (duration: string) => {
    setRegion(region.region);
    setDuration(duration);
  };

  return (
    <div>
      <PageNavigation currentStep={1} totalSteps={2} />
      <Aisubject>
            AI 플래너
        </Aisubject>
        <DurationSelectionTitle>여행기간을</DurationSelectionTitle>
        <DurationSelectionSubTitle>선택해 주세요</DurationSelectionSubTitle>
      <DurationList>
        {durations.map((duration, index) => (
          <DurationItem
            key={index}
            onClick={() => handleDurationClick(duration.data)}
            src={data.duration === duration.data ? duration.afterIcon : duration.beforeIcon}
          />
        ))}
      </DurationList>
        <ButtonWrapper>
            <PrevButton onClick={handlePrevClick}>이전</PrevButton>
            {/* <NextButton onClick={handleNextClick}>다음</NextButton> */}
            <NextButton $isAbled={!data.duration} onClick={handleNextClick}>다음</NextButton>
        </ButtonWrapper>
    </div>
  );
}

const Aisubject = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #71C9B0;
    margin-left:12px;
`;

const DurationSelectionTitle = styled.div`
    margin-left:12px;
    margin-top: 8px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #333333;
`; 
    
const DurationSelectionSubTitle = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #333333;
    margin-left:12px;
`;

const DurationList = styled.div`
    padding: 26px 22px 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const DurationItem = styled.img`
    width: 80px;
    height: 104px;
`;


const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 22px;
    width: 100vw; /* 부모 요소의 padding을 무시하고 가로를 꽉 채움 */
    max-width: 500px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 26px;
    display: flex;
    justify-content: space-between;
    // align-items: center;
`;


const NextButton = styled.button<{$isAbled: boolean}>`
    width: 93px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #71C9B0;
    font-size: 13px;
    font-weight: 500;
    color: ${({ $isAbled }) => ($isAbled ? '#71C9B0' : '#FFFFFF')};
    background-color: ${({ $isAbled }) => ($isAbled ? '#FFFFFF' : '#71C9B0')};
    &:hover {
        background-color: #71C9B0;
        color: #FFFFFF;
    }
`;
    
const PrevButton = styled.button`

    opacity: 0;
    // width: 93px;
    // height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    font-size: 13px;
    font-weight: 500;
    color: #A1A1A1;
`;