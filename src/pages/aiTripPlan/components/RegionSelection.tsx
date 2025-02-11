import styled from "styled-components";
import { useTravelPlanner } from "../context/TravelPlannerContext";
import PageNavigation from "./PageNavigation";

const regions = [
  "서울", "부산", "대구", "인천", "광주", "대전", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
];

export default function RegionSelection({ onNext }: { onNext: () => void }) {
    const { data, setRegion } = useTravelPlanner();

    const handleRegionClick = (region: string) => {
    setRegion(region);
    };

    const handleNextClick = () => {
        if (data.region) {
            onNext();
        } else {
            // alert("지역을 선택해 주세요.");
        }
    };

  return (
    <RegionSelectionWrapper>
        <PageNavigation currentStep={1} totalSteps={3} />
        <Aisubject>
            AI 플래너
        </Aisubject>
        <RegionSelectionTitle>여행을 떠나고 싶은 지역을</RegionSelectionTitle>
        <RegionSelectionSubTitle>선택해 주세요</RegionSelectionSubTitle>
        <RegionSelectionList >
            {regions.map((region) => (
            <SelectionItem
                key={region}
                $selected={region === data.region}
                onClick={() => handleRegionClick(region)}
            >
                {region}
            </SelectionItem>
            ))}
        </RegionSelectionList>
        <ButtonWrapper>
            <PrevButton></PrevButton>
            <NextButton $isAbled={!data.region} onClick={handleNextClick}>다음</NextButton>
        </ButtonWrapper>
    </RegionSelectionWrapper>
  );
}

const RegionSelectionWrapper = styled.div`
    padding-bottom: 30px;
`;

const Aisubject = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #71C9B0;
    margin-left:12px;
`;

const RegionSelectionTitle = styled.div`
    margin-left:12px;
    margin-top: 8px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #333333;
`; 
    
const RegionSelectionSubTitle = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #333333;
    margin-left:12px;
`;

const RegionSelectionList = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 21px;
    max-height: 323px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4열 레이아웃 */
    gap: 25px 20px; /* 세로 간격 25px, 가로 간격 20px */
    margin: 0 auto;
    margin-top: 26px;
`;

const SelectionItem = styled.button<{ $selected: boolean }>`
    font-size: 12px;
    font-weight: 500;
    color: ${({ $selected }) => ($selected ? '#FFFFFF' : '#606060')};
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $selected }) => ($selected ? '#71C9B0' : '#F7FAF9')};
    &:hover {
        color: #FFFFFF;
        background-color: #71C9B0;
    }
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
    // color: {} #71C9B0;
    color: ${({ $isAbled }) => ($isAbled ? '#71C9B0' : '#FFFFFF')};
    background-color: ${({ $isAbled }) => ($isAbled ? '#FFFFFF' : '#71C9B0')};
    &:hover {
        background-color: #71C9B0;
        color: #FFFFFF;
    }
`;
    
const PrevButton = styled.button`
    opacity: 0;
`;