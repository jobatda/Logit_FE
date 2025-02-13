import styled from "styled-components";

import PlannerScheduleList from "../../../aiTripPlan/components/PlannerScheduleList";

export default function PostDetailContent({content, scheduleImage}: {content: string; scheduleImage: string}) {
    return (
        <DetailContentWrapper>
            <DetailContent>
                {content}
            </DetailContent>
            <ContentTrablePlane src={scheduleImage} alt='여행 계획 이미지'/>
            <PlannerScheduleList courseid="1"/>

        </DetailContentWrapper>
    )
}

const DetailContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 43px 32px 0 32px;
    background-color: #ffffff;
`;

const DetailContent = styled.div`
    font-size: 13px;
    line-height: 18px;
    font-weight: 300;
    color: #333333;
`;

const ContentTrablePlane = styled.img`
    margin-top: 51px;
    width:100%;
    height:100%;
    object-fit: cover;
    margin-bottom: 20px;
`;