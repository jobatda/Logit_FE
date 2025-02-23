import styled from "styled-components";
import deleteBtn from "../../../assets/myPage/myPageCardDeleteBtn.svg";
import { TravelPlanCardProps } from "../types/TravelPlanCardProps";

export default function TravelPlanCard(props: TravelPlanCardProps) {
  const getCoursePeriodText = (period: number) => {
    switch (period) {
      case 0:
        return '당일치기';
      case 1:
        return '1박 2일';
      case 2:
        return '2박 3일';
      default:
        return '미정';
    }
  };

  return (
    <TravelCardWrapper>
      <TravelCardImage src={`data:image/png;base64,${props.courseImage[0]}`} alt={props.courseTitle} />
      <DeleteBtn src={deleteBtn} alt="delete" />
      {/* Right: Text Info */}
      <TravelCardInfoWrapper>
        <TravelCardState>{getCoursePeriodText(props.coursePeriod)}</TravelCardState>
        <TravelCardTitle>{props.courseTitle}</TravelCardTitle>
        {/* <TravelCardDescription>{props.description}</TravelCardDescription> 여행 추천 지역 갯수 */}
        <TravelCardDescription>총 4개의 장소</TravelCardDescription>
        {/* <TravelCardTag>{props.tag.map(tag => `# ${tag}`).join(" ")}</TravelCardTag> */}
        <TravelCardTag>{props.courseTheme.split(',').map(tag => `# ${tag.trim()}`).join(" ")}</TravelCardTag>
        <TravelCardDateInfoWrapper>
          <TravelCardCreatedText>만든날짜</TravelCardCreatedText>
          <DateBar/>
          <TravelCardCreatedDate>{props.courseCreDate}</TravelCardCreatedDate>
        </TravelCardDateInfoWrapper>
      </TravelCardInfoWrapper>
      </TravelCardWrapper>
  );
};


const TravelCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 12px 12px;
  border: 2px solid #F8F8F8;
  border-radius: 13px;
  gap: 12px;
`;

const DeleteBtn = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  object-fit: cover;
`;

const TravelCardImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 98px;
  object-fit: cover;
  border-radius: 10px;
`;

const TravelCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%; // 임시로 한 번 넣어보고 이상 없으면 놔두기
  gap: 5px; 
  max-height: 109px;
`;

const TravelCardState = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  max-width: 54px;
  border-radius: 10px;
  background-color: #71C9B0;
  color: #FFFFFF;
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
`;

const TravelCardTitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  color: #333333;
`;

const TravelCardDescription = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #A1A1A1;
`;

const TravelCardTag = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #A1A1A1;
`;

const TravelCardDateInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: #A1A1A1;
`;
const DateBar = styled.div`
  width: 1px;
  height: 12px;
  background-color: #A1A1A1;
`;
const TravelCardCreatedText = styled.div`
`;
const TravelCardCreatedDate = styled.div`
`;