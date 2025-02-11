import styled from "styled-components";
import {useState} from "react";

import MyPageProfile from "./components/MyPageProfile";
import BookMarkContent from "./components/BookMarkContent";
import PlanContent from "./components/PlanContent";
import ThunderContent from "./components/ThunderContent";

export default function MyPage() {
    const [activeTab, setActiveTab] = useState('profile');

    const onClickChangeTab = (tab: string) => () => {
        setActiveTab(tab);
    };

    return (
        <MyPageWrapper>
            <MyPageSelectorBar>
                <SelectorBarContent $isActive={activeTab==='profile'} onClick={onClickChangeTab('profile')}>프로필</SelectorBarContent>
                <SelectorBarContent $isActive={activeTab==='bookMark'} onClick={onClickChangeTab('bookMark')}>북마크</SelectorBarContent>
                <SelectorBarContent $isActive={activeTab==='plan'} onClick={onClickChangeTab('plan')}>여행 플랜</SelectorBarContent>
                <SelectorBarContent $isActive={activeTab==='thunder'} onClick={onClickChangeTab('thunder')}>참여 번개</SelectorBarContent>
            </MyPageSelectorBar>
            <MyPagerContentWrapper>
                {activeTab === 'profile' ? (
                    <MyPageProfile/>
                ) : activeTab === 'bookMark' ? (
                    <BookMarkContent/>
                ) : activeTab === 'plan' ? (
                    <PlanContent/>
                ) : (
                    <ThunderContent/>
                )}
            </MyPagerContentWrapper>
        </MyPageWrapper>
    );
}


const MyPageWrapper = styled.div`
    width: 100vw; /* 부모 요소의 padding을 무시하고 가로를 꽉 채움 */
    max-width: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
`;

const MyPageSelectorBar = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-around;
    min-height: 44px;
`;

const SelectorBarContent = styled.button<{ $isActive: boolean }>`
    min-width: 70px;
    color: ${({ $isActive }) => ($isActive ? '#71C9B0' : '#606060')};
    border-bottom: ${({$isActive}) => ($isActive ? '2px solid #71C9B0' : '2px solid #ffffff')};
    font-weight: ${({ $isActive }) => ($isActive ? '500' : '300')};
    border-radius: 1px;
    padding-bottom: 8px;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    justify-content: center;
`;

const MyPagerContentWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

