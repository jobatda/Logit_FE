import styled from "styled-components";

import deleteBtn from "../../../assets/myPage/myPageCardDeleteBtn.svg";


// TravelCardProps.ts
export interface TravelCardProps {
  image: string;
  state: string;
  title: string;
  startDate: string;
  endDate: string;
}
// joinDate?: string;
// location?: string;

  export default function TravelThunderCard(props: TravelCardProps) {
    return (
      <TravelCardWrapper>
        <TravelCardImage src={props.image} alt={props.title} />
        <DeleteBtn src={deleteBtn} alt="delete" />
        <TravelCardInfoWrapper>
          <TravelCardState>{props.state}</TravelCardState>
          <TravelCardTitle>{props.title}</TravelCardTitle>
          <TravelCardDateInfoWrapper>
            <TravelCardCreatedText>참여기간</TravelCardCreatedText>
            <DateBar/>
            <TravelCardCreatedDate>{props.startDate} ~ {props.endDate}</TravelCardCreatedDate>
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
  height: 109px;

  // display: flex;
  // justify-content: space-between;
  // flex-direction: column;
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
  margin-top: 6px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  color: #333333;
`;

const TravelCardDateInfoWrapper = styled.div`
  position: absolute;
  bottom: 12px;
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