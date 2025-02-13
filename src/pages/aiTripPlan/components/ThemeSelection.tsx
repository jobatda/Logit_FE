import styled from "styled-components";
import { useTravelPlanner } from "../context/TravelPlannerContext";
import PageNavigation from "./PageNavigation";
import { useState } from "react";

import mountainImage from "../../../assets/aiPlan/mountain.png";
import seaImage from "../../../assets/aiPlan/sea.png";
import indoorImage from "../../../assets/aiPlan/indoorTravel.png";
import activityImage from "../../../assets/aiPlan/activities.png";
import cultureImage from "../../../assets/aiPlan/cultureHistory.png";
import themeparkImage from "../../../assets/aiPlan/themeParks.png";
import festivalImage from "../../../assets/aiPlan/festivals.png";
import axios from "axios";

const dummythemes = [
  { label: "산", image: mountainImage },
  { label: "바다", image: seaImage },
  { label: "실내 여행지", image: indoorImage },
  { label: "액티비티", image: activityImage },
  { label: "문화/역사", image: cultureImage },
  { label: "테마파크", image: themeparkImage },
  { label: "축제", image: festivalImage },
];

export default function ThemeSelection({ onNext, onPrevious, setCourseid }: { onNext: () => void; onPrevious: () => void; setCourseid: (courseid: string) => void }) {
  const { setThemes, data } = useTravelPlanner();
  const [ loadding, setLoading ] = useState<boolean>(false);

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
          // console.log(data);
          const postData = async () => {
            try {
              // 보낼 데이터 정의
              const aicreatProp = {
                region: data.region,
                duration: data.duration,
                theme: data.themes,
            };

            const headers = {
              "Content-Type": "application/json", // 요청 본문이 JSON 형식임을 명시
            };

              const url = "https://travelgo.mooo.com/ai/aiplanner";
              // const url = "https://localhost:8000/aiplanner";
              setLoading(true);
              const response = await axios.post(url, aicreatProp, { headers });
              // 응답 출력
              // console.log("응답 데이터:", response.data);
              setLoading(false);
              
              // response.data.output
              // response.data.themes = data.themes;
              // response.data.location = data.region;
              const createCourseData = {
                output:{
                ...response.data.output,
              },
              themes: data.themes,
              location: data.region,
              };
              console.log(createCourseData);
              const creatUrl = "https://travelgo.mooo.com/api/course";
              // const createResponse = await axios.post(creatUrl, createCourseData, { headers });
              const createResponse = await axios.post(creatUrl, createCourseData);
              // 서버에 post 한 번 더 보내서 courseid를 받아옴
              // 서버에서 받은 데이터 중 courseid를 저장
              // setCourseid(response.data.courseid);
              setCourseid(createResponse.data.courseid);
              onNext();
            } catch (error) {
              console.error("오류 발생:", error);
              // 에러발생시 에외처리 요함
            }
          };
          // postData();
          

          setCourseid("1");
          onNext();
        } else {
        }
    };

    const handlePrevClick = () => {
        onPrevious();
    };

  return (
    <ThemeSelectionWrapper>
      <Loadding $isLoadding={loadding}>
        AI플래너가 여행지를 추천 중입니다!
      </Loadding>
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

const Loadding = styled.div<{$isLoadding: boolean}>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ $isLoadding }) => ($isLoadding ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const ThemeSelectionWrapper = styled.div`
  position: relative;
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