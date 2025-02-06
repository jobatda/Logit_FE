import styled, { css } from "styled-components";
import {Outlet, useLocation} from "react-router-dom";
import Header from "./Header/Header";

export default function Layout() {
    const location = useLocation();
    const isWithoutHeaderFooter = location.pathname.startsWith("/Thunder/:id");

    return (
        <LayoutWrapper isWithoutHeaderFooter={isWithoutHeaderFooter}>
            <Header/>
            <LayoutMain isWithoutHeaderFooter={isWithoutHeaderFooter}>
                <Outlet/>
            </LayoutMain>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div<{ isWithoutHeaderFooter: boolean }>`
    ${({isWithoutHeaderFooter}) => isWithoutHeaderFooter
    ? css`
        min-height: 100vh;
        margin: 0 auto;
    `
    : css`
        position: relative;
        min-height: 100vh;
        padding: 52px 20px 86px; 
    `}
`;


const LayoutMain = styled.main<{ isWithoutHeaderFooter: boolean }>`
    ${({isWithoutHeaderFooter}) => isWithoutHeaderFooter
    ? css`
    `
    : css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(100vh - 52px - 86px);
    `}
`;