import styled from "styled-components";
import { useTravelPlanner } from "../context/TravelPlannerContext";
import PageNavigation from "./PageNavigation";

import mountainImage from "../../../assets/aiPlan/mountain.png";
import seaImage from "../../../assets/aiPlan/sea.png";
import indoorImage from "../../../assets/aiPlan/indoorTravel.png";
import activityImage from "../../../assets/aiPlan/activities.png";
import cultureImage from "../../../assets/aiPlan/cultureHistory.png";
import themeparkImage from "../../../assets/aiPlan/themeParks.png";
import festivalImage from "../../../assets/aiPlan/festivals.png";

const dummythemes = [
  { label: "산", image: mountainImage },
  { label: "바다", image: seaImage },
  { label: "실내 여행지", image: indoorImage },
  { label: "액티비티", image: activityImage },
  { label: "문화/역사", image: cultureImage },
  { label: "테마파크", image: themeparkImage },
  { label: "축제", image: festivalImage },
];

export default function ThemeSelection({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) {
  const { setThemes, data } = useTravelPlanner();

  const handleThemeClick = (theme: string) => {
    if (data.themes.includes(theme)) {
      setThemes(data.themes.filter((t: string) => t !== theme));
    } else if (data.themes.length < 3) {
      setThemes([...data.themes, theme]);
    }
  };
  // const handleComplete = () => {
    // setThemes(s);
    // onComplete(); // 완료 후 서버로 데이터 전송 또는 결과 페이지로 이동
  // };

    const handleNextClick = () => {
        if (data.themes.length > 1 && data.region && data.duration) {
            console.log(data);
            onNext();
        } else {
            // alert("지역을 선택해 주세요.");
            // 실행하고 다음 추천 리스트로 넘어가기
        }
    };

    const handlePrevClick = () => {
        onPrevious();
    };

  return (
    <ThemeSelectionWrapper>
      <PageNavigation currentStep={2} totalSteps={2} />
        <Aisubject>
            AI 플래너
        </Aisubject>
        <RegionSelectionTitle>원하는 여행 테마를 2개 이상</RegionSelectionTitle>
        <RegionSelectionSubTitle>선택해 주세요(최대 3개)</RegionSelectionSubTitle>
      <ThemeList>
      {dummythemes.map(({ label, image }) => (
          <ItemWrapper key={label} onClick={() => handleThemeClick(label)} $selected={data.themes.includes(label)}>
            <ItemImg src={image} alt={label}/>
            <ItemLabel>{label}</ItemLabel>
          </ItemWrapper>
        ))}
      </ThemeList>
      <div>
        <ButtonWrapper>
            <PrevButton onClick={handlePrevClick}>이전</PrevButton>
            {/* <NextButton onClick={handleNextClick}>다음</NextButton> */}
            <NextButton $isAbled={data.themes.length > 1} onClick={handleNextClick}>다음</NextButton>
        </ButtonWrapper>
      </div>
    </ThemeSelectionWrapper>
  );
}

const ThemeSelectionWrapper = styled.div`
  padding-bottom: 60px;
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

const ThemeList = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 4열 레이아웃 */
    gap: 25px 20px; /* 세로 간격 25px, 가로 간격 20px */
    margin: 0 auto;
    margin-top: 27px; 
`;

const ItemWrapper = styled.div<{$selected: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    & img {
        border-radius: 50%;
        border: 3px solid ${({ $selected }) => ($selected ? "#71C9B0" : "transparent")};
    }
`;

const ItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ItemLabel = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #606060;
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
    color: ${({ $isAbled }) => ($isAbled ? '#FFFFFF' : '#71C9B0')};
    background-color: ${({ $isAbled }) => ($isAbled ? '#71C9B0' : '#FFFFFF')};
    &:hover {
        background-color: #71C9B0;
        color: #FFFFFF;
    }
`;
    
const PrevButton = styled.button`
    width: 93px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    font-size: 13px;
    font-weight: 500;
    color: #A1A1A1;
`;