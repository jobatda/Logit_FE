import styled from "styled-components";

import { PostDetailContentProp } from '../../types/Post';

export default function PostDetailContent(prop: PostDetailContentProp) {
    return (
        <DetailContentWrapper>
            <DetailContent>
                {prop.content}
            </DetailContent>
            <ContentTrablePlane src={prop.scheduleImage} alt='여행 계획 이미지'/>
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
`;