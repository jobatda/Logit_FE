import styled from "styled-components";
import React from "react";

type PageNavigationProps = {
  currentStep: number;
  totalSteps: number;
};

export default function PageNavigation({ currentStep, totalSteps }: PageNavigationProps) {
  return (
    <PagenavigationWrapper>
       {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <Dot isActive={index + 1 === currentStep}>
            {String(index + 1).padStart(2, '0')}
          </Dot>
          {index + 1 === currentStep && <CurrentPageBar />}
        </React.Fragment>
      ))}
    </PagenavigationWrapper>
  );
}

const PagenavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap:7px;
    padding: 26px 26px;
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