import styled, { css } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer.tsx";

export default function Layout() {
    const location = useLocation();
    const isWithoutHeaderFooter = /^\/thunder\/\d+$/.test(location.pathname);

    return (
        <LayoutWrapper $isWithoutHeaderFooter={isWithoutHeaderFooter}>
             {!isWithoutHeaderFooter && <Header />}
            <LayoutMain $isWithoutHeaderFooter={isWithoutHeaderFooter}>
                <Outlet />
            </LayoutMain>
            {!isWithoutHeaderFooter && <Footer />}
        </LayoutWrapper>
    );
}

const LayoutWrapper = styled.div<{ $isWithoutHeaderFooter: boolean }>`
    ${({ $isWithoutHeaderFooter }) => $isWithoutHeaderFooter ? 
    css`
        min-height: 100vh;
        margin: 0 auto;
    ` : 
    css`
        position: relative;
        min-height: 100vh;
        padding: 56px 20px 80px;
    `};
`;

const LayoutMain = styled.main<{ $isWithoutHeaderFooter: boolean }>`
    ${({ $isWithoutHeaderFooter }) => $isWithoutHeaderFooter ? 
    css`
    ` :
    css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(100vh - 56px - 80px)
    `};
`;