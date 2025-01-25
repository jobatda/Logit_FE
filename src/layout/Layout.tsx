import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";

export default function Layout() {
    return (
        <LayoutWrapper>
            <Header/>
            <LayoutMain>
                <Outlet/>
            </LayoutMain>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 52px 20px 86px;
`;

const LayoutMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 52px - 86px);
`;