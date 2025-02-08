import styled from "styled-components";
import { useState, useEffect } from "react";

import locationIcon from '../../temp_assets/ic_round-place.png';
import dateIcon from '../../temp_assets/mingcute_time-line.png';
import memberIcon from '../../temp_assets/fluent_people-24-regular.png';
import memberDetailBtn from '../../temp_assets/memberDetailBtn.png';
import goBackBtn from '../../temp_assets/postDetailGoBackBtn.png';
import shareBtn from '../../temp_assets/postDetailShareBtn.png';
import memberImgMini from '../../temp_assets/memberImageMini.png'; // member가 부족할 때 땜빵
import memberDetailModal from '../../temp_assets/postDetailModal.png';


import { PostDetailInfoProp } from "../../types/Post";

export default function PostDetailInfo(prop :PostDetailInfoProp) {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        // 6초 후에 모달을 닫는다.
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 20000);
        return () => clearTimeout(timer);
    }, []);

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <DetailTopWrapper>
        <ImageBannerWrapper>
            <GoBackBtn src={goBackBtn} onClick={handleBackClick}/>
            {/* ShareBtn 공유하기 버튼 구현해야됨 test */}
            <ShareBtn src={shareBtn} />
            <DetailImage src={prop.image} />
        </ImageBannerWrapper>
        <DetailInfoWrapper>
                <DetailIsRecruiting>
                    {/* test 임의로 구분 나눔 */}
                    {prop.isRecruiting ? "모집중" : "모집완료"}
                </DetailIsRecruiting>
                <DetailTitle>
                    {prop.title}
                </DetailTitle>
            <DetailInfo>
                <InfoLocation>
                    <InfoLocationIcon src={locationIcon} />
                    {prop.location}
                </InfoLocation>
                <InfoDateWrapper>
                    <InfoDateIcon src={dateIcon} />
                    <InfoDate>
                        {prop.startDate["month"]}월 {prop.startDate["day"]}일 ({prop.startDate["dayOfWeek"]}) ~ {prop.endDate["month"]}월 {prop.endDate["day"]}일 ({prop.endDate["dayOfWeek"]})
                    </InfoDate>
                    <InfoDateDuration>{prop.days}박 {prop.days + 1}일</InfoDateDuration>
                </InfoDateWrapper>
                <InfoMemberWrapper>
                    {showModal && <MemberDetailModal src={memberDetailModal} />}
                    <InfoMemberSituation>
                        <InfoMemberIcon src={memberIcon} alt='멤버 아이콘'/>확정 멤버
                        &nbsp;<HilightCurrentMember>{prop.currentPeople}명</HilightCurrentMember>
                        &nbsp;/ {prop.totalPeople}명
                    </InfoMemberSituation>
                    <InfoMemberDetailBtn onClick={prop.onClickToMemberCheck}>

                        <MemberDetailArray>
                            {prop.members.map((member, index) => (
                                <MemberImgMini src={member||memberImgMini} key={index} alt='멤버 이미지' />
                            ))}
                        </MemberDetailArray>
                        <MemberDetailBtn src={memberDetailBtn} alt='멤버 현황 버튼'/>
                    </InfoMemberDetailBtn>
                </InfoMemberWrapper>
            </DetailInfo>
            <AuthorWrapper>
                <AuthorProfileImg src={prop.authorImage} alt='작성자 프로필 이미지' />
                <AuthorName>{prop.author}</AuthorName>
            </AuthorWrapper>
        </DetailInfoWrapper>
    </DetailTopWrapper>
    )
}

const MemberDetailModal = styled.img`
    position: absolute;
    top: 30px;
    right: 0;
    width: 139px;
    height: 37px;
    opacity: 1;
    transition: opacity 0.5s ease-out;

    &.fade-out {
        opacity: 0;
    }
`;

const DetailTopWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    // max-height: 542px;
    height: 542px;
    // max-width: 390px;
`;

const ImageBannerWrapper = styled.div`
    width: 100%;
    height: 100%;
    // max-width: 390px;
    max-height: 226px;
    position: relative;
`;

const GoBackBtn = styled.img`
    cursor: pointer;
    position: absolute;
    top: 50px;
    left: 16px;
    width: 32px;
    height: 32px;
`;

const ShareBtn = styled.img`
    cursor: pointer;
    position: absolute;
    top: 50px;
    right: 16px;
    width: 32px;
    height: 32px;
`;

const DetailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const DetailInfoWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 17px 32px 18px 32px;
    width: 100%;
    border-radius: 16px 16px 0 0; /* 상단 모서리를 둥글게 */
    background-color: #ffffff;
    z-index: 2;
`;


const DetailIsRecruiting = styled.div`
    color: #71C9B0;
    font-size: 15px;
    font-weight: 700; // bold
    letter-spacing: 1px; // 글자간격 추가
`;

const DetailTitle = styled.div`
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0px;
    font-weight: 700; // bold
    color: #333333;
`;

const DetailInfo= styled.div`
    border-top: 1px solid #F8F8F8;
    border-bottom: 1px solid #F8F8F8;
    margin-top: 10px;
    padding: 22px 0;
    min-height: 140px; // test
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const InfoLocation = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    line-height: 17px;
    font-weight: 400; // normal
    color: #A1A1A1;

`;

const InfoLocationIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const InfoDateWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
`;

const InfoDateIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const InfoDate = styled.div`
    font-size: 15px;
    line-height: 17px;
    font-weight: 400; // normal
    color: #A1A1A1;
`;

const InfoDateDuration = styled.div`
    border-radius: 13px;
    background-color: #F8F8F8;
    color: #606060;
    font-size: 13px;
    line-height: 17px;
    font-weight: 400; // normal
    padding: 3.5px 9.5px;
`;

const InfoMemberWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const InfoMemberIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const InfoMemberSituation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 17px;
    font-weight: 400; // normal
    color: #A1A1A1;
`;

const HilightCurrentMember = styled.span`
    font-weight: 700; // bold
    color: #71C9B0;
`;

const InfoMemberDetailBtn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

const MemberDetailArray = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MemberImgMini = styled.img`
    width: 100%;
    height: 100%;
    max-width: 24px;
    max-height: 24px;
    object-fit: cover;
    margin-right: -8px;
    border-radius: 50%;
    border: 2px solid #ffffff;
`;

const MemberDetailBtn = styled.img`
    margin-left: 8px;
`;

const AuthorWrapper = styled.div`
    padding: 20px 0 16px 26px;
    display: flex;  
    justify-content: start;
    align-items: center;
    gap: 25px;
    background-color: #F8F8F8;
    border-radius: 10px;
    margin-top: 14px;
    cursor: pointer;
`;

const AuthorProfileImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 48px;
    max-height: 48px;
    object-fit: cover;
`;

const AuthorName = styled.div`
    fonst-size: 15px;
    line-height: 17px;
    font-weight: 600; // semibold
    color: #333333;
`;
