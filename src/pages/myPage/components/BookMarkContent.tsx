import styled from "styled-components";
import {useState} from "react";

import noDataIcon from "../../../assets/myPage/bookmarkNoDataIcon.svg"; //test

export default function BookMarkContent() {
    const [activeTab, setActiveTab] = useState('festivals');

    const onClickChangeTab = (tab: string) => () => {
        setActiveTab(tab);
    };

    return (
        <>
            <BookMarkTabWrapper>
                <SelectorBarContent $isActive={activeTab==='festivals'} onClick={onClickChangeTab('festivals')}>축제</SelectorBarContent>
                <SelectorBarContent $isActive={activeTab==='experiences'} onClick={onClickChangeTab('experiences')}>체험</SelectorBarContent>
                <SelectorBarContent $isActive={activeTab==='thunder'} onClick={onClickChangeTab('thunder')}>번개</SelectorBarContent>
            </BookMarkTabWrapper>
            <BookMarkContentWrapper>
                {activeTab === 'festivals' ? (
                        <NoDataWrapper>
                            <NoDataIcon src={noDataIcon} alt="북마크한 축제가 없습니다."/>
                            <NoDataText>북마크한 축제가 없습니다.</NoDataText>
                        </NoDataWrapper>
                ) : activeTab === 'experiences' ? (
                        <NoDataWrapper>
                            <NoDataIcon src={noDataIcon} alt="북마크한 체험이 없습니다."/>
                            <NoDataText>북마크한 체험이 없습니다.</NoDataText>
                        </NoDataWrapper>
                ) : (
                        <NoDataWrapper>
                            <NoDataIcon src={noDataIcon} alt="북마크한 번개가 없습니다."/>
                            <NoDataText>북마크한 번개가 없습니다.</NoDataText>
                        </NoDataWrapper>
                )}
            </BookMarkContentWrapper>
        </>
    );
}

const BookMarkTabWrapper = styled.div`
    overflow-x: hidden;
    margin-top: 16px;
    margin-left: 19px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`;

const SelectorBarContent = styled.button<{ $isActive: boolean }>`
    color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#A1A1A1')};
    background-color: ${({ $isActive }) => ($isActive ? '#71C9B0' : '#F8F8F8')};
    font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};
    font-size: 14px;
    line-height: 18px;
    border-radius: 50px;
    padding: 6.5px 22.5px;
`;

const BookMarkContentWrapper = styled.div`
    position: relative;
`;

const NoDataWrapper = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
`;

const NoDataIcon = styled.img`
    max-width: 60px;
    max-height: 60px;
    width: 100%;
    object-fit: cover;
`;

const NoDataText = styled.div`
    color: #606060;
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
`;

