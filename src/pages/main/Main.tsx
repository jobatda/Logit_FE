import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import PeopleIcon from "../../assets/main/PeoPleIcon.svg?react";
import RightArrowMiniIcon from "../../assets/main/RightArrowMiniIcon.svg?react";
import RoadIcon from "../../assets/main/RoadIcon.svg?react";
import SearchIcon from "../../assets/main/SearchIcon.png";
import AIPlanIcon from "../../assets/main/AIPlanIcon.png";
import MainThunderGo from "../../assets/main/MainThunderGo.png";
import MainBanner1 from "../../assets/main/MainBanner1.png";
import MainBanner2 from "../../assets/main/MainBanner2.png";
import MainBanner4 from "../../assets/main/MainBanner4.png";
import Row from "../../styles/Common/Row.ts";
import {useEffect, useState} from "react";
import GetThunders from "../../apis/main/getThunders.ts";

interface thundersType {
    meetingContent: string;
    meetingContentImage: string[];
    meetingEndDate: string;
    meetingId: number;
    meetingLocation: string;
    meetingMaxCnt: number;
    meetingNowCnt: number;
    meetingStartDate: string;
    meetingTitle: string;
}

export default function Main() {
    const navigate = useNavigate();
    const [thunders, setThunders] = useState<thundersType[]>([]);

    useEffect(() => {
        const fetchThunders = async () => {
            const result: any = await GetThunders();
            setThunders(result);
        }
        fetchThunders();
    }, [])

    const onClickGoAiPlanner = () => {
        navigate("/regionMap");
    }

    const formatDateIntl = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("ko-KR", {month: "long", day: "numeric", weekday: "short"}).format(date);
    };

    const getStayDuration = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = end.getTime() - start.getTime();
        const days = diffTime / (1000 * 60 * 60 * 24);
        if (days === 0) {
            return "당일치기";
        }
        return `${days}박 ${days + 1}일`;
    };


    return (
        <>
            <MainBanner>
                <img src={MainBanner1} alt=""/>
                <img src={MainBanner2} alt=""/>
                <img src={MainBanner4} alt=""/>
            </MainBanner>
            <Row $gap={14} style={{margin: "20px 0 30px 0"}}>
                <MenuItem onClick={onClickGoAiPlanner}>
                    <Title>AI 플래너</Title>
                    <Subtitle>1분 만에<br/>나만의 여행<br/> 코스 제작</Subtitle>
                    <img src={AIPlanIcon} alt=""/>
                </MenuItem>
                <MenuItem onClick={() => navigate(`/regionMap`)}>
                    <Title>여행GO 지도</Title>
                    <Subtitle>미방문 지역<br/>한눈에 확인하기</Subtitle>
                    <img src={SearchIcon} alt=""/>
                </MenuItem>
            </Row>
            <ThunderWrapper>
                <SectionTitle>추천 번개</SectionTitle>
                <Row $horizonAlign="distribute" $verticalAlign="center" style={{marginBottom: "12px"}}>
                    <SectionSubTitle>함께할 여행 메이트를 찾고, 지금 바로 떠나보세요!</SectionSubTitle>
                    <AddButton onClick={() => navigate(`/thunder`)}>
                        더보기
                        <RightArrowMiniIcon/>
                    </AddButton>
                </Row>
                <ThunderSection>
                    {thunders?.slice(0, 3).map((feed) => (
                        <ThunderDetail key={feed.meetingId}
                                       onClick={() => navigate(`/thunder/${feed.meetingId}`)}>
                            <img src={`data:image/png;base64,${feed.meetingContentImage[0]}`} alt=""/>
                            <div style={{margin: "8px 0"}}>
                                <ThunderDetailTitle>{feed.meetingTitle}</ThunderDetailTitle>
                                <Row $gap={6} $verticalAlign="center" style={{marginBottom: "3px"}}>
                                    <ThunderPeople>
                                        <PeopleIcon/>
                                        {feed.meetingNowCnt}명/{feed.meetingMaxCnt}명
                                    </ThunderPeople>
                                    <ThunderPeriod>
                                        {getStayDuration(feed.meetingStartDate, feed.meetingEndDate)}
                                    </ThunderPeriod>
                                </Row>
                                <Row $gap={5}>
                                    <ThunderDate>{formatDateIntl(feed.meetingStartDate)}</ThunderDate>
                                    <StyledHr/>
                                    <ThunderLocation>{feed.meetingLocation}</ThunderLocation>
                                </Row>
                            </div>
                        </ThunderDetail>
                    ))}
                </ThunderSection>
            </ThunderWrapper>
            <button onClick={() => navigate("/thunder")} style={{margin: "16px 0"}}>
                <img src={MainThunderGo} alt=""/>
            </button>
        </>
    );
}

const MainBanner = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 5px;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }

    img {
        max-width: 293px;
        max-height: 266px;
    }

    &::after {
        content: "";
        width: 100vw;
        max-width: 500px;
        height: 200px;
        background-color: #71C9B0;
        position: absolute;
        left: 0;
        top: 56px;
        z-index: -1;
    }
`;

const StyledHr = styled.hr`
    border: none;
    width: 1px;
    height: 17px;
    background-color: #D9D9D9;
`;

const ThunderLocation = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: #A1A1A1;
`;

const ThunderDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: #A1A1A1;
`;

const ThunderPeriod = styled.div`
    color: #606060;
    background-color: #F8F8F8;
    border-radius: 13px;
    font-size: 11px;
    font-weight: 400;
    padding: 0 7px;
`;

const ThunderPeople = styled.div`
    display: flex;
    align-items: center;
    color: #A1A1A1;
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
`;

const ThunderDetailTitle = styled.div`
    font-size: 15px;
    color: #333333;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const ThunderDetail = styled.div`
    padding: 12px;
    border-radius: 12px;
    border: 2px solid #F8F8F8;
    display: flex;
    gap: 12px;
    cursor: pointer;

    img {
        border-radius: 10px;
        max-width: 98px;
        min-width: 98px;
        height: 98px;
    }
`;

const ThunderSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 13px;
`;

const ThunderWrapper = styled.div`
`;

const SectionTitle = styled.div`
    font-weight: 600;
    color: #333333;

`;

const AddButton = styled.button`
    font-size: 12px;
    font-weight: 400;
    color: #606060;
    gap: 3px;
    align-items: center;
`;

const SectionSubTitle = styled.div`
    color: #606060;
    font-weight: 400;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const MenuItem = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
    padding: 14px 16px;
    border-radius: 12px;
    background-color: #F7FAF9;
    min-height: 106px;
    position: relative;

    img {
        position: absolute;
        width: 34px;
        height: 34px;
        bottom: 11px;
        right: 13px;
    }
`

const Title = styled.h3`
    font-weight: 600;
    line-height: 23px;
    color: #333333;
    text-align: left;
`

const Subtitle = styled.p`
    font-size: 12px;
    color: #333333;
    font-weight: 400;
    text-align: left;
`