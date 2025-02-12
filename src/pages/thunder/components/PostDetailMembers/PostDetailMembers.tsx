import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PieChart from './PieChart';
import axios from "axios";
import { PostType } from "../../types/Post";

import headerBackBtn from '../../temp_assets/detailMembersBackBtn.svg';
import memberIcon from '../../temp_assets/PostMembersMemberCountIcon.svg';
import memberList from '../../temp_assets/postMemberList.svg';

interface PostDetailMembersType {
members: [
    {
      userName: string,
      userAge: number,
      userSex: string,
      userImage: string,
      mbti: string,
      isHost: true
    }
  ],
  nowCnt: number,
  maxCnt: number
}

interface ChartData {
    labels: string[];
    data: number[];
    color: string[];
    highlightedIndex?: number;
  }
  
  interface ProcessedData {
    key: string;
    value: number;
    percentage: string;
  }

export default function PostDetailMembers() {
    const { id } = useParams<{ id: string }>();
    const [postMembers, setPostMembers] = useState<PostDetailMembersType>();
    const [post, setPost] = useState<PostType>();
    const [activeTab, setActiveTab] = useState('age');
    const [chartData, setChartData] = useState<{ age: ChartData, sex: ChartData, mbti: ChartData}>({
        age: { labels: [], data: [], color: [] },
        sex: { labels: [], data: [], color: [] },
        mbti: { labels: [], data: [], color: [] },
    });

    const processAndSortData = (data: Record<string, number>): ProcessedData[] => {
        const total = Object.values(data).reduce((sum, value) => sum + value, 0); // 전체 값의 합
        return Object.entries(data)
            .map(([key, value]) => ({ key, value, percentage: ((value / total) * 100).toFixed(2) })) // 백분율 계산
            .sort((a, b) => a.value - b.value); // value 기준으로 내림차순 정렬
    };

    const insertData = (sortedData: ProcessedData[]): ChartData => {
        const maxValue = Math.max(...sortedData.map((item) => item.value)); // 최댓값 구하기
        let maxValueFound = false; // 최댓값이 이미 설정되었는지 여부를 추적
        let highlightedIndex = -1; // 첫 번째 최댓값 항목의 인덱스
      
        const result = {
          labels: sortedData.map((item) => item.key), // key를 labels에 추가
          data: sortedData.map((item) => item.value), // value를 data에 추가
          color: sortedData.map((item, index) => {
            if (item.value === maxValue && !maxValueFound) {
              maxValueFound = true;
              highlightedIndex = index; // 첫 번째 최댓값 항목의 인덱스 설정
              return "#71C9B0"; // 최댓값 항목의 색상 설정
            }
            return "#F8F8F8"; // 나머지 항목의 색상 설정
          }),
          highlightedIndex,
        };
      
        return result;
      };

    const handleBackClick = () => {
        window.history.back();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`https://travelgo.mooo.com/api/user-meeting/${id}`);
              console.log(`postMembers: ${response.data}`);
              setPostMembers(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://travelgo.mooo.com/api/meeting/meetingId/${id}`);
                console.log(`post: ${response.data}`);
              setPost(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };

        fetchData();
        fetchPost();

     
    }, [id]);



    useEffect(() => {
        if (postMembers) {
            const ageData = postMembers.members.reduce<Record<string, number>>((acc, member) => {
                const ageGroup = Math.floor(member.userAge / 10) * 10 + '대';
                acc[ageGroup] = acc[ageGroup] ? acc[ageGroup] + 1 : 1;
                return acc;
            }, {});
            const sexData = postMembers.members.reduce<Record<string, number>>((acc, member) => {
                const sex = member.userSex.startsWith('m') ? '남자' : '여자';
                acc[sex] = acc[sex] ? acc[sex] + 1 : 1;
                return acc;
            }, {});
            const mbtiData = postMembers.members.reduce<Record<string, number>>((acc, member) => {
                const mbti = member.mbti.startsWith('I') ? 'I' : 'E';
                acc[mbti] = acc[mbti] ? acc[mbti] + 1 : 1;
                return acc;
            }, {});

            setChartData({
                age: insertData(processAndSortData(ageData)),
                sex: insertData(processAndSortData(sexData)),
                mbti: insertData(processAndSortData(mbtiData)),
              });
        }
    }, [postMembers]);

    const onClickChangeTab = (tab: string) => () => {
        setActiveTab(tab);
    };

    if (!postMembers || !post) return null;

    return (
        <PostMembersContainer>
            <PostMembersHeaderWrapper>
            <PostMembersHeader>
                <BackBtn src={headerBackBtn} alt="뒤로가기"
                    onClick={handleBackClick}
                />
                <HeaderTitle>확정 멤버</HeaderTitle>
            </PostMembersHeader>
            <PostMembersContent>
                <MemberContentBtnWrapper>
                    <ContentAgeBtn $isActive={activeTab === 'age'} onClick={onClickChangeTab('age')}>
                        나이
                    </ContentAgeBtn>
                    <ContentSexBtn $isActive={activeTab === 'sex'} onClick={onClickChangeTab('sex')}>
                        성별
                    </ContentSexBtn>
                    <ContentMBTIBtn $isActive={activeTab === 'mbti'} onClick={onClickChangeTab('mbti')}>
                        MBTI
                    </ContentMBTIBtn>
                </MemberContentBtnWrapper>
                <PieChartContainer>
                    {activeTab === 'age' ? (
                        <>
                            <PieChart labels={chartData.age.labels} data={chartData.age.data} borderColor={chartData.age.color} />
                            <HighlightedPieChart>
                                {chartData.age.highlightedIndex && chartData.age.labels[chartData.age.highlightedIndex]}
                            </HighlightedPieChart>
                        </>
                    ) : activeTab === 'sex' ? (
                        <>
                            <PieChart labels={chartData.sex.labels} data={chartData.sex.data} borderColor={chartData.sex.color} />
                            <HighlightedPieChart>
                                {chartData.sex.highlightedIndex && chartData.sex.labels[chartData.sex.highlightedIndex]}
                            </HighlightedPieChart>
                        </>
                    ) : (
                        <>
                            <PieChart labels={chartData.mbti.labels} data={chartData.mbti.data} borderColor={chartData.mbti.color} />
                            <HighlightedPieChart>
                                {chartData.mbti.highlightedIndex && chartData.mbti.labels[chartData.mbti.highlightedIndex]}
                            </HighlightedPieChart>
                        </>
                    )}
                </PieChartContainer>
                <PieChartGuide>
                    * 영역을 탭하면 정보가 떠요!
                </PieChartGuide>
            </PostMembersContent>
                <MemberCount>
                    <MemberCountIcon src={memberIcon} />
                    확정 멤버
                    &nbsp;<MemberCountHilight>{post.meetingNowCnt}명</MemberCountHilight>
                    &nbsp;/ {post.meetingMaxCnt}명
                </MemberCount>
            </PostMembersHeaderWrapper>
            <MemberList src={memberList} alt="멤버 리스트" />
        </PostMembersContainer>
    );
}

const PostMembersContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostMembersHeaderWrapper = styled.div`
    width: 100%;
    padding: 0 28px;
`;

const PostMembersHeader = styled.div`
    margin-top: 19px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
`;

const BackBtn = styled.img`
    object-fit: cover;
    cursor: pointer;
`;

const HeaderTitle = styled.span`
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    color: #333333;
`;

const PostMembersContent = styled.div`
    position: relative;
    padding: 29px 37px 0 37px;
    width: 100%;
    min-height: 359px;
    border: 2px solid #F8F8F8;
    border-radius: 10px;
    margin-top: 20px;
`;

const MemberContentBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3px;
    width: 100%;
`;

const Button = styled.button<{ $isActive: boolean }>`
    background-color: ${({ $isActive }) => ($isActive ? '#71C9B0' : '#F8F8F8')};
    color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#606060')};
    border: none;
    width: 100%;
    max-width: 78px;
    min-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 13px;
    cursor: pointer;
    font-size: 13px;
    line-height: 17px;
    font-weight: 600;
`;

const ContentAgeBtn = styled(Button)``;
const ContentSexBtn = styled(Button)``;
const ContentMBTIBtn = styled(Button)``;

const PieChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    margin-left: 28px;
    margin-right: 28px;
    position: relative;
`;

const HighlightedPieChart = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    left: 50%;
    transform: translateX(-50%);
    bottom: 13px;
    font-size: 10px;
    ling-height: 17px;
    font-weight: 600; // semibold
    border-radius: 13px;
    color: #71C9B0;
    min-width: 55px;
    min-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PieChartGuide = styled.div`
    position: absolute;
    bottom: 11px;
    right: 20px;
    font-size: 10px;
    line-height: 18px;
    font-weight: 300;
    color: #333333;

`;

const MemberCount = styled.div`
    margin-top: 21px;
    width: 100%;
    font-size: 15px;
    line-height: 17px;
    font-weight: 400;
    color: #71C9B0;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const MemberCountIcon = styled.img`
    object-fit: cover;
    margin-right: 3.5px;
`;

const MemberCountHilight = styled.span`
    font-weight: 700;
`;

const MemberList = styled.img`
    object-fit: cover;
    margin-top: 18px;
    width: 100%;
`;