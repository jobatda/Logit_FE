import styled from "styled-components";
import SearchIcon from "../../assets/feed/SearchIcon.svg?react";
import LocationIcon from "../../assets/feed/LocationIcon.svg?react";
import PeopleIcon from "../../assets/main/PeopleIcon.svg?react";
import RightArrowMiniIcon from "../../assets/main/RightArrowMiniIcon.svg?react";
import ThunderIcon from "../../assets/main/ThunderIcon.png";
import AIPlanIcon from "../../assets/main/AIPlanIcon.png";
import RouletteIcon from "../../assets/main/RouletteIcon.png";
import testImg from "../../assets/main/testImg.png";
import Row from "../../styles/Common/Row.ts";

const feedDummys = [
    {
        title: "청도 정월대보름?",
        location: "경상북도 청도",
        img: testImg,
    },
    {
        title: "제32회 태백산 눈축제",
        location: "강원도 태백",
        img: testImg,
    },
    {
        title: "별빛이 흐르는 어쩌구",
        location: "경기도 파주",
        img: testImg,
    },

]

export default function Main() {
    return (
        <>
            <SearchBarWrapper>
                <SearchInput placeholder="무주, 겨울여행, 체험"/>
                <SearchIcon color="#71C9B0"/>
            </SearchBarWrapper>
            <Row $gap={14}>
                <MenuItem>
                    <Title>AI 플래너</Title>
                    <Subtitle>1분 만에<br/>나만의 여행<br/> 코스 제작</Subtitle>
                    <img src={AIPlanIcon} alt=""/>
                </MenuItem>
                <MenuItem>
                    <Title>여행GO 번개</Title>
                    <Subtitle>번개처럼 빠르게<br/>여행 친구 찾기</Subtitle>
                    <img src={ThunderIcon} alt=""/>
                </MenuItem>
            </Row>
            <RouletteItem style={{marginTop: "14px"}}>
                <Title>룰렛으로 떠나는 여행</Title>
                <img src={RouletteIcon} alt=""/>
            </RouletteItem>
            <FeedWrapper>
                <SectionTitle>전국이 들썩! 지금 가야 할 축제는?</SectionTitle>
                <Row $horizonAlign="distribute" $verticalAlign="center" style={{marginBottom: "12px"}}>
                    <SectionSubTitle>배너를 클릭하고 지금 바로 알아보세요</SectionSubTitle>
                    <AddButton>
                        더보기
                        <RightArrowMiniIcon/>
                    </AddButton>
                </Row>
                <FeedSection>
                    {feedDummys.map((feed) => (
                        <FeedDetail key={feed.title}>
                            <img src={feed.img} alt=""/>
                            <FeedDetailTitle>{feed.title}</FeedDetailTitle>
                            <FeedDetailLocation>
                                <LocationIcon/>
                                <div>{feed.location}</div>
                            </FeedDetailLocation>
                        </FeedDetail>
                    ))}
                </FeedSection>
            </FeedWrapper>
            <Banner/>
            <ThunderWrapper>
                <SectionTitle>추천 번개</SectionTitle>
                <Row $horizonAlign="distribute" $verticalAlign="center" style={{marginBottom: "12px"}}>
                    <SectionSubTitle>함께할 여행 메이트를 찾고, 지금 바로 떠나보세요!</SectionSubTitle>
                    <AddButton>
                        더보기
                        <RightArrowMiniIcon/>
                    </AddButton>
                </Row>
                <ThunderSection>
                    {feedDummys.map((feed) => (
                        <ThunderDetail key={feed.title}>
                            <img src={feed.img} alt=""/>
                            <div style={{margin: "8px 0"}}>
                                <ThunderDetailTitle>{feed.title}</ThunderDetailTitle>
                                <Row $gap={6} $verticalAlign="center" style={{marginBottom: "3px"}}>
                                    <ThunderPeople>
                                        <PeopleIcon/>
                                        2명/6명
                                    </ThunderPeople>
                                    <ThunderPeriod>
                                        1박 2일
                                    </ThunderPeriod>
                                </Row>
                                <Row $gap={5}>
                                    <ThunderDate>2월 16일 (토)</ThunderDate>
                                    <StyledHr/>
                                    <ThunderLocation>전북 무주</ThunderLocation>
                                </Row>
                            </div>
                        </ThunderDetail>
                    ))}
                </ThunderSection>
            </ThunderWrapper>
            <ThunderBanner>
                <ThunderBannerTitle>여행GO 번개</ThunderBannerTitle>
                <ThunderBannerContent>전국 팔도의 숨겨진 장소로 직접 찾아 갈 타이밍!<br/> 지금 떠나볼까요?</ThunderBannerContent>
                <ThunderBannerButton>바로 가기</ThunderBannerButton>
            </ThunderBanner>
        </>
    );
}

const ThunderBannerButton = styled.button`
    position: absolute;
    padding: 2px 12px;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    right: 16px;
    bottom: 16px;
    border-radius: 30px;
    color: #FFFFFF;
`;

const ThunderBannerContent = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`;

const ThunderBannerTitle = styled.div`
    font-weight: 600;
    line-height: 23px;
    margin-bottom: 3px;
`;

const ThunderBanner = styled.div`
    margin: 33px 0 22px;
    position: relative;
    color: #FFFFFF;
    padding: 16px;
    background: linear-gradient(90deg, #71C9B0 0%, #60A995 100%);
    border-radius: 12px;
    height: 107px;
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

const Banner = styled.div`
    background-color: #F7FAF9;
    border-radius: 12px;
    margin-bottom: 33px;
    height: 107px;
    width: 100%;
`;

const FeedSection = styled.section`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const FeedDetailLocation = styled.div`
    display: flex;
    gap: 3px;
    font-size: 12px;
    color: #606060;
    font-weight: 300;
    line-height: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const FeedDetailTitle = styled.div`
    font-size: 12px;
    color: #333333;
    font-weight: 500;
    line-height: 17px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
`;

const FeedDetail = styled.div`
    max-width: 142px;
    min-width: 142px;

    img {
        border-radius: 10px;
        margin-bottom: 5px;
    }
`;

const FeedWrapper = styled.div`
    margin: 35px 0 33px;
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

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 13px 16px;
    border: 2px solid #71C9B0;
    border-radius: 12px;
    font-size: 15px;
    outline: none;
    color: #333333;
    font-weight: 500;
    margin: 16px 0;
`

const SearchInput = styled.input`
    width: 100%;

    &::placeholder {
        color: #A1A1A1;
    }
`

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

const RouletteItem = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 3px;
    padding: 20px 16px;
    border-radius: 12px;
    background-color: #F7FAF9;

    img {
        width: 34px;
        height: 34px;
    }
`;

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