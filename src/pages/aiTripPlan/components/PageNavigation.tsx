import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

import goHomeIcon from "../../../assets/aiPlan/aiPlanGoHome.svg";

type PageNavigationProps = {
  currentStep: number;
  totalSteps: number;
};

export default function PageNavigation({ currentStep, totalSteps }: PageNavigationProps) {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate("/");
  };

  return (
    <PagenavigationWrapper>
      <GoHomeBtn src={goHomeIcon} onClick={onClickGoHome} />
      <NavigationWrapper>
       {Array.from({ length: totalSteps }, (_, index) => (
         <React.Fragment key={index}>
          <Dot isActive={index + 1 === currentStep}>
            {String(index + 1).padStart(2, '0')}
          </Dot>
          {index + 1 === currentStep && <CurrentPageBar />}
        </React.Fragment>
      ))}
      </NavigationWrapper>
    </PagenavigationWrapper>
  );
}

const PagenavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 6px 12px 0;
`;

const GoHomeBtn = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
    object-fit: cover;
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const Dot = styled.div<{ isActive: boolean }>`
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    color: ${({ isActive }) => (isActive ? '#333333;' : '#A1A1A1')}
`;

const CurrentPageBar = styled.div`
    width: 38px;
    height: 1px;
    background-color: #333333;
`;