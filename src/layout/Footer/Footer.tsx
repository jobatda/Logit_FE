import styled from "styled-components";
import FeedIcon from "../../assets/Layout/FeedIcon.svg?react";
import HomeIcon from "../../assets/Layout/HomeIcon.svg?react";
import ThunderIcon from "../../assets/Layout/ThunderIcon.svg?react";
import MyIcon from "../../assets/Layout/MyIcon.svg?react";
import MapIcon from "../../assets/Layout/MapIcon.svg?react";
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <FooterWrapper>
            <StyledNavLink to="/regionMap">
                <MapIcon/>
                <FooterPageName>지도</FooterPageName>
            </StyledNavLink>
            <StyledNavLink to="/feed">
                <FeedIcon/>
                <FooterPageName>피드</FooterPageName>
            </StyledNavLink>
            <StyledNavLink to="/">
                <HomeIcon/>
                <FooterPageName>홈</FooterPageName>
            </StyledNavLink>
            <StyledNavLink to="/thunder">
                <ThunderIcon/>
                <FooterPageName>번개</FooterPageName>
            </StyledNavLink>
            <StyledNavLink to="/myPage">
                <MyIcon/>
                <FooterPageName>마이</FooterPageName>
            </StyledNavLink>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 18px 36px;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 500;
    background-color: white;
    border-top: 1px solid #C8C8C8;

    @media (min-width: 500px) {
        transform: translateX(-50%);
        left: 50%;
        width: 500px;
    }
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    gap: 4px;
    color: #C8C8C8;

    &.active {
        color: #71C9B0;
    }
`;

const FooterPageName = styled.div`
    font-size: 10px;
`