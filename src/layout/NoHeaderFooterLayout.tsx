import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function NoHeaderFooterLayout() {
    return (
        <LayoutWrapper>
            <Outlet />
        </LayoutWrapper>
    );
}

const LayoutWrapper = styled.div`
    min-height: 100vh;
    max-width: 390px; // test
    margin: 0 auto; // test
`;
